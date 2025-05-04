import bs58 from 'bs58';
import type { NextFunction, Request, Response } from 'express';
import nacl from 'tweetnacl';
import { PrismaClient } from '../../packages/db/generated/prisma';

export const walletAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { walletAddress, signedMessage, originalMessage } = req.body;

  if (!walletAddress || !signedMessage || !originalMessage) {
    return res.status(400).json({ error: 'Missing authentication data.' });
  }

  try {
    const messageBytes = new TextEncoder().encode(originalMessage);
    const signature = bs58.decode(signedMessage);
    const publicKey = bs58.decode(walletAddress);

    const isValid = nacl.sign.detached.verify(messageBytes, signature, publicKey);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid signature.' });
    }

    // Check if wallet exists in DB
    const user = await PrismaClient.user.findUnique({
      where: { wallet_address: walletAddress },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not registered.' });
    }

    // Attach user to request
    req.user = user;
    next();

  } catch (err) {
    return res.status(500).json({ error: 'Internal auth error.' });
  }
};