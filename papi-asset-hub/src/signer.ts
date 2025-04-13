import { config } from "dotenv"
// import { u8aToHex } from '@polkadot/util'
// import { mnemonicToMiniSecret, sr25519PairFromSeed, cryptoWaitReady } from "@polkadot/util-crypto";


import { DEV_PHRASE, entropyToMiniSecret, mnemonicToEntropy, KeyPair } from "@polkadot-labs/hdkd-helpers"

import { sr25519CreateDerive } from "@polkadot-labs/hdkd"

import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { createClient } from "polkadot-api"
import { ss58Address } from "@polkadot-labs/hdkd-helpers";
import { hub,local } from "@polkadot-api/descriptors"
import { readFileSync } from 'fs';
import { Binary } from 'polkadot-api'
import { getPolkadotSigner } from "polkadot-api/signer"
import {ss58ToEthAddress} from "./convert"
import { MultiAddress } from "@polkadot-api/descriptors"

// import { MultiAddress } from "@polkadot/types";

const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
    return ss58Address(publickey, SS58_PREFIX);
}

export async function getAlice() {
    config()
    const url = "http://127.0.0.1:9944"

    const secret = process.env.SECRET

    const provider = getWsProvider(url);
    const client = createClient(provider);
    const api = client.getTypedApi(local)

    const aliceEntropy = mnemonicToEntropy(DEV_PHRASE) // DEV_PHRASE is "bottom drive obey lake curtain smoke basket hold race lonely fit walk"
    const aliceMiniSecret = entropyToMiniSecret(aliceEntropy)
    const aliceDerive = sr25519CreateDerive(aliceMiniSecret)
    
    // The path for Alice is //Alice
    const aliceKeyPair = aliceDerive("//Alice")

    const aliceSs58Address = convertPublicKeyToSs58(aliceKeyPair.publicKey)
    console.log("ss58 is ", aliceSs58Address)
    const aliceBalance = await api.query.System.Account.getValue(aliceSs58Address)
    console.log("alice balance is ", aliceBalance.data.free)

    

    const signer = getPolkadotSigner(
        aliceKeyPair.publicKey,
        "Sr25519",
        aliceKeyPair.sign,
    )
    return signer
}


export async function getSignerAh() {
    config()
    const url = "wss://westend-asset-hub-rpc.polkadot.io"

    const secret = process.env.SECRET

    const provider = getWsProvider(url);
    const client = createClient(provider);

    console.log(secret)

    if (!secret) {
        throw new Error("SECRET environment variable is not set.");
    }

    const entropy = mnemonicToEntropy(secret)
    const miniSecret = entropyToMiniSecret(entropy)
    const derive = sr25519CreateDerive(miniSecret)
    const hdkdKeyPair = derive("")

    // const publicKeyHex = u8aToHex(hdkdKeyPair.publicKey);    // 64 characters + 0x prefix
    const ss58Address = convertPublicKeyToSs58(hdkdKeyPair.publicKey)
    console.log("ss58 is ", ss58Address)

    const api = client.getTypedApi(hub)
    const account = await api.query.System.Account.getValue(ss58Address)
    console.log("balance is ", account.data.free)

    

    const signer = getPolkadotSigner(
        hdkdKeyPair.publicKey,
        "Sr25519",
        hdkdKeyPair.sign,
    )
    return signer
}