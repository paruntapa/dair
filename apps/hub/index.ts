import { randomUUIDv7, type ServerWebSocket } from "bun";
import type { IncomingMessage, SignupIncomingMessage } from "common/types";
import { prismaClient } from "db/client";
import { PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";
import nacl_util from "tweetnacl-util";
import { AirStatus } from "../../packages/db/generated/prisma";

const availableValidators: { validatorId: string, socket: ServerWebSocket<unknown>, publicKey: string }[] = [];

const CALLBACKS : { [callbackId: string]: (data: IncomingMessage) => void } = {}
const COST_PER_VALIDATION = 100; // in lamports

Bun.serve({
    fetch(req, server) {
      if (server.upgrade(req)) {
        return;
      }
      return new Response("Upgrade failed", { status: 500 });
    },
    port: 8081,
    websocket: {
        async message(ws: ServerWebSocket<unknown>, message: string) {
            const data: IncomingMessage = JSON.parse(message);
            
            if (data.type === 'signup') {

                const verified = await verifyMessage(
                    `Signed message for ${data.data.callbackId}, ${data.data.publicKey}`,
                    data.data.publicKey,
                    data.data.signedMessage
                );
                if (verified) {
                    await signupHandler(ws, data.data);
                }
            } else if (data.type === 'validate') {
                CALLBACKS[data.data.callbackId]?.(data);
                delete CALLBACKS[data.data.callbackId];
            }
        },
        async close(ws: ServerWebSocket<unknown>) {
            availableValidators.splice(availableValidators.findIndex(v => v.socket === ws), 1);
        }
    },
});

async function signupHandler(ws: ServerWebSocket<unknown>, { publicKey, signedMessage, callbackId }: SignupIncomingMessage) {
    const validatorDb = await prismaClient.validator.findFirst({
        where: {
            walletAddress: publicKey,
        },
    });

    if (validatorDb) {
        ws.send(JSON.stringify({
            type: 'signup',
            data: {
                validatorId: validatorDb.id,
                callbackId,
            },
        }));

        availableValidators.push({
            validatorId: validatorDb.id,
            socket: ws,
            publicKey: validatorDb.walletAddress,
        });
        return;
    }
    
    const validator = await prismaClient.validator.create({
        data: {
            walletAddress: publicKey,
        },
    });

    ws.send(JSON.stringify({
        type: 'signup',
        data: {
            validatorId: validator.id,
            callbackId,
        },
    }));

    availableValidators.push({
        validatorId: validator.id,
        socket: ws,
        publicKey: validator.walletAddress,
    });
}

async function verifyMessage(message: string, publicKey: string, signature: string) {
    const messageBytes = nacl_util.decodeUTF8(message);
    const result = nacl.sign.detached.verify(
        messageBytes,
        new Uint8Array(JSON.parse(signature)),
        new PublicKey(publicKey).toBytes(),
    );

    return result;
}

setInterval(async () => {
    const placesToGetAirQuality = await prismaClient.place.findMany({
        where: {
            disabled: false,
            airQuality: {
                is: null,
            },
        },
    });
    console.log(`Found ${placesToGetAirQuality.length} places to get air quality for`);

    for (const place of placesToGetAirQuality) {
        console.log("availableValidators", availableValidators);
        availableValidators.forEach(async (validator) => {
            const callbackId = randomUUIDv7();
            console.log(`Sending validate to ${validator.validatorId} ${place.placeName}`);
            validator.socket.send(JSON.stringify({
                type: 'validate',
                data: {
                    placeId: place.id,
                    lat: place.latitude,
                    lng: place.longitude,
                    callbackId
                },
            }));

            await prismaClient.place.update({
                where: {
                    id: place.id,
                },
                data: {
                    validatorFetching: true,
                }
            });

            CALLBACKS[callbackId] = async (data: IncomingMessage) => {
                if (data.type === 'validate') {
                    console.log(`Received validate from ${validator.validatorId} ${place.placeName}`);
                    const { validatorId, signedMessage, aqi, pm25, pm10, co, no, so2, nh3, no2, o3 } = data.data;
                    console.log("data.data", data.data);
                    const verified = await verifyMessage(
                        `Replying to ${callbackId}`,
                        validator.publicKey,
                        signedMessage
                    );
                    if (!verified) {
                        return;
                    }

                    await prismaClient.$transaction(async (tx) => {

                        await tx.place.update({
                            where: {
                                id: place.id,
                            },
                            data: {
                                validatedByWallet: validator.publicKey,
                                validatorFetching: false,
                            }
                        });

                        await tx.airQuality.create({
                            data: {
                                placeId: place.id,
                                place: {
                                    connect: {
                                        id: place.id,
                                    },
                                },
                                aqi,
                                pm25,
                                pm10,
                                co,
                                no,
                                so2,
                                nh3,
                                no2,
                                o3,
                                status: aqi === 1 ? AirStatus.GOOD : aqi === 2 ? AirStatus.MODERATE : aqi === 3 ? AirStatus.UNHEALTHY : aqi === 4 ? AirStatus.VERY_UNHEALTHY : AirStatus.SEVERE,
                            },
                        });

                        await tx.validator.update({
                            where: { id: validatorId },
                            data: {
                                pendingPayouts: { increment: COST_PER_VALIDATION },
                            },
                        });
                    });
                }
            };
        });
    }
}, 1000);