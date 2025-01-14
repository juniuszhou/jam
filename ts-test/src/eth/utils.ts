import { createWalletClient, defineChain, http, publicActions, zeroAddress } from "viem"
import { privateKeyToAccount } from 'viem/accounts'
import { ApiPromise, WsProvider, Keyring } from '@polkadot/api';
import { randomBytes } from 'crypto';

export const chain = defineChain({
    id: 0 ? 1337 : 420420420,
    name: 'Asset Hub Westend',
    network: 'asset-hub',
    nativeCurrency: {
        name: 'Westie',
        symbol: 'WST',
        decimals: 18,
    },
    rpcUrls: {
        default: {
            // http: ['https://westend-asset-hub-eth-rpc.polkadot.io']
            http: ['http://localhost:8545'],
        },
    },
    testnet: true,
})

export const walletClient = (async () => {
    require('dotenv').config();
    const privateKey = process.env.PRIVATE_KEY;

    if (!privateKey) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables.");
    }

    const account = privateKeyToAccount(`0x${privateKey}`)
    console.log(`Wallet address ${account.address}`)


    const wallet = createWalletClient({
        account,
        transport: http(),
        chain,
    })

    return wallet.extend(publicActions)

})()

export const polkadotApi = (async () => {
    const wsProvider = new WsProvider('wss://westend-asset-hub-rpc.polkadot.io');
    // const wsProvider = new WsProvider('ws://127.0.0.1:9944');
    // const wsProvider = new WsProvider('ws://10.0.0.11:9944');
    const api = await ApiPromise.create({ provider: wsProvider });
    return api;
})()

export function getRandomKeypair() {
    const keyring = new Keyring({ type: 'sr25519' });
    const seed = randomBytes(32);
    return keyring.addFromSeed(seed)
}

// import a keyring instance from seed