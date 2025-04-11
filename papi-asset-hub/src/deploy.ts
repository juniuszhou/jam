import { config } from "dotenv"
import { u8aToHex } from '@polkadot/util'
// import { mnemonicToMiniSecret, sr25519PairFromSeed, cryptoWaitReady } from "@polkadot/util-crypto";


import { DEV_PHRASE, entropyToMiniSecret, mnemonicToEntropy, KeyPair } from "@polkadot-labs/hdkd-helpers"

import { sr25519CreateDerive } from "@polkadot-labs/hdkd"

import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { createClient } from "polkadot-api"
import { ss58Address } from "@polkadot-labs/hdkd-helpers";
import { hub } from "@polkadot-api/descriptors"
import { readFileSync } from 'fs';
import { Binary } from 'polkadot-api'
import { getPolkadotSigner } from "polkadot-api/signer"
import {ss58ToEthAddress} from "./convert"
const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
    return ss58Address(publickey, SS58_PREFIX);
}

export async function deploy(name: string) {
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
    // const nonce = await api.query.System.Account.getValue(ss58Address)
    console.log(account.nonce)

    const path = "../rust-contract-template/" + name + ".polkavm"
    const binaryData = readFileSync(path);

    const signer = getPolkadotSigner(
        hdkdKeyPair.publicKey,
        "Sr25519",
        hdkdKeyPair.sign,
    )

    // const tx = api.tx.Revive.map_account(); 

    // submit code
    const tx = api.tx.Revive.instantiate_with_code({
        data: Binary.fromHex("0x"),
        value: BigInt(1e6),
        gas_limit: {
            ref_time: BigInt(1e6),
            proof_size: BigInt(1e6),
        },
        storage_deposit_limit: BigInt(1e16),

        code: Binary.fromBytes(binaryData),
        salt: undefined
    })

    let result = await tx.signAndSubmit(signer)

    // from this message, we can get the ss58 address of deployed contract.
    // System {
    //   type: 'NewAccount',
    //   value: { account: '5HFF42Lew3aWoEkyzntjjCV41aXkGVjVBJdS7s5MwJcAF4d9' }
    // }

    // event.type is System
    // event.value.type is NewAccount
    // event.value.value get account is 5HFF42Lew3aWoEkyzntjjCV41aXkGVjVBJdS7s5MwJcAF4d9
    console.log(result)

    let address = ""
    for (const event of result.events) {
        console.log("=======================")
        console.log("type is ", event.type);
        console.log("++ ")
        console.log("value is ", event.value);
        if (event.type === "System" && event.value.type === "NewAccount") {
            address = event.value.value.account
            console.log("address is ", address)
        }
        // console.log("=======================")

    }
    console.log("address is ", address)
    const erc20Address = ss58ToEthAddress(address)
    // console.log(result.dispatchError?.value)

    client.destroy()

}
