import { randomUUIDv7 } from "bun";
import type { OutgoingMessage, SignupOutgoingMessage, ValidateOutgoingMessage } from "common/types";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import nacl_util from "tweetnacl-util";

const CALLBACKS: {[callbackId: string]: (data: SignupOutgoingMessage) => void} = {}

let validatorId: string | null = null;

async function main() {
    const keypair = Keypair.fromSecretKey(
        Uint8Array.from(JSON.parse(process.env.PRIVATE_KEY!))
    );
    const ws = new WebSocket("ws://localhost:8081");

    ws.onmessage = async (event: MessageEvent) => {
        const data: OutgoingMessage = JSON.parse(event.data);
        if (data.type === 'signup') {
            CALLBACKS[data.data.callbackId]?.(data.data)
            delete CALLBACKS[data.data.callbackId];
        } else if (data.type === 'validate') {
            await validateHandler(ws, data.data, keypair);
        }
    }

    ws.onopen = async () => {
        const callbackId = randomUUIDv7();
        CALLBACKS[callbackId] = (data: SignupOutgoingMessage) => {
            validatorId = data.validatorId;
        }
        const signedMessage = await signMessage(`Signed message for ${callbackId}, ${keypair.publicKey}`, keypair);

        ws.send(JSON.stringify({
            type: 'signup',
            data: {
                callbackId,
                publicKey: keypair.publicKey,
                signedMessage,
            },
        }));
    }
}

async function validateHandler(ws: WebSocket, { lat, lng, placeId, callbackId }: ValidateOutgoingMessage, keypair: Keypair) {
    console.log(`Validating ${placeId}`);
    const signature = await signMessage(`Replying to ${callbackId}`, keypair);

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_API_KEY}`);
        const status = response.status;
        const data = await response.json();
        console.log(data);
        console.log(placeId);
        console.log(status);
        ws.send(JSON.stringify({
            type: 'validate',
            data: {
                callbackId,
                placeId,
                validatorId,
                signedMessage: signature,
                aqi: data.list[0].main.aqi,
                pm25: data.list[0].components.pm2_5,
                pm10: data.list[0].components.pm10,
                co: data.list[0].components.co,
                no: data.list[0].components.no,
                so2: data.list[0].components.so2,
                nh3: data.list[0].components.nh3,
                no2: data.list[0].components.no2,
                o3: data.list[0].components.o3,
            },
        }));
    } catch (error) {
        ws.send(JSON.stringify({
            type: 'validate',
            data: {
                callbackId,
                placeId,
                validatorId,
                signedMessage: signature,
            },
        }));
        console.error(error);
    }
}

async function signMessage(message: string, keypair: Keypair) {
    const messageBytes = nacl_util.decodeUTF8(message);
    const signature = nacl.sign.detached(messageBytes, keypair.secretKey);

    return JSON.stringify(Array.from(signature));
}

main();

setInterval(async () => {

}, 1000);