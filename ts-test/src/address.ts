import { privateKeyToAccount } from 'viem/accounts'
import { Keyring, WsProvider, ApiPromise } from '@polkadot/api';

async function verifyAddress() {
    // eth address from private key
    require('dotenv').config();
    const privateKey = process.env.PRIVATE_KEY;

    if (!privateKey) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables.");
    }

    const account = privateKeyToAccount(`0x${privateKey}`)
    console.log(`Wallet address ${account.address}`)

    // substrate address
    const wsProvider = new WsProvider('wss://westend-asset-hub-rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    const keyring = new Keyring({ type: 'sr25519' });

    const pair = keyring.addFromUri("//dev::alith");
    console.log(`Pair address ${pair.address}`);


}

verifyAddress()