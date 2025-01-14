import { asset } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { sr25519CreateDerive } from "@polkadot-labs/hdkd"
import {
    sr25519,
    DEV_PHRASE,
    entropyToMiniSecret,
    mnemonicToEntropy,
} from "@polkadot-labs/hdkd-helpers"
import { env } from 'bun';


export type ClientUrlType = 'ws://10.0.0.11:9944' | 'wss://westend-asset-hub-rpc.polkadot.io';

export function getApi(url: ClientUrlType) {
    const provider = getWsProvider(url);
    const client = createClient(provider);
    const dotApi = client.getTypedApi(asset);
    return dotApi
}

export function getKeyPair() {

    require('dotenv').config();
    const phrase = process.env.URI;
    if (!phrase) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables.");
    }
    const entropy = mnemonicToEntropy(phrase)
    const miniSecret = entropyToMiniSecret(entropy)
    const derive = sr25519CreateDerive(miniSecret)

    // Example usage for generating a sr25519 keypair with hard derivation
    const keypair = derive("//Alice")
    return keypair
}