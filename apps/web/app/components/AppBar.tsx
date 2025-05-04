"use client";
import React from 'react'
import {
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';

const AppBar = () => {
  const { publicKey } = useWallet();
  
  return (
    <div className='flex justify-between border-b m-1 border-gray-200 items-center'>
        <div>
            <h1 className='text-2xl px-2 font-bold'>Dair</h1>
        </div>
        <div>
            <div className='hover:underline mb-2 rounded-md'>{publicKey ? <WalletDisconnectButton/> : <WalletMultiButton/>}</div>
        </div>
    </div>
  )
}

export default AppBar