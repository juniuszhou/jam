import { config } from "dotenv"
// import { u8aToHex } from '@polkadot/util'
// import { mnemonicToMiniSecret, sr25519PairFromSeed, cryptoWaitReady } from "@polkadot/util-crypto";


import { DEV_PHRASE, entropyToMiniSecret, mnemonicToEntropy, KeyPair } from "@polkadot-labs/hdkd-helpers"

import { sr25519CreateDerive } from "@polkadot-labs/hdkd"

import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { createClient } from "polkadot-api"
import { ss58Address } from "@polkadot-labs/hdkd-helpers";
import { hub, local } from "@polkadot-api/descriptors"
import { readFileSync } from 'fs';
import { Binary, TypedApi } from 'polkadot-api'
import { getPolkadotSigner, PolkadotSigner } from "polkadot-api/signer"
import {ss58ToEthAddress} from "./convert"
const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
    return ss58Address(publickey, SS58_PREFIX);
}

export async function mapLocal(api: TypedApi<typeof local>, signer: PolkadotSigner) {

    const tx = api.tx.Revive.map_account()

    let result = await tx.signAndSubmit(signer)
    console.log(result)

}


export async function mapAh(api: TypedApi<typeof hub>, signer: PolkadotSigner, name: string) {    

    const tx = api.tx.Revive.map_account()

    let result = await tx.signAndSubmit(signer)
    console.log(result)
}