import { config } from "dotenv"
import { } from "viem/accounts"

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

export async function deploy(api: TypedApi<typeof local | typeof hub>, signer: PolkadotSigner, name: string) {


    const path = "../rust-contract/" + name + ".polkavm"
    const binaryData = readFileSync(path);


    // submit code
    const tx = api.tx.Revive.instantiate_with_code({
        data: Binary.fromHex("0x1234567812345678"),
        value: BigInt(0),
        gas_limit: {
            // computation cost
            ref_time: BigInt(1e12),
            // storage cost
            proof_size: BigInt(1e6),
        },
        storage_deposit_limit: BigInt(1e18),
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
        console.log("value in value is ", event.value.value.toString());
        if (event.type === "System" && event.value.type === "NewAccount") {
            address = event.value.value.account
            console.log("address is ", address)
        }
    }
    console.log("ss58 address is ", address)
    if (address.length === 0) {
        throw new Error("No contract address found in events");
    }
    
    const erc20Address = ss58ToEthAddress(address)
    console.log("erc20 address is ", erc20Address)
}

export async function deployEVM() {

}

// export async function deployAh(api: TypedApi<typeof hub | typeof local>, signer: PolkadotSigner, name: string) {    

//     const path = "../rust-contract-template/" + name + ".polkavm"
//     const binaryData = readFileSync(path);
//     // submit code
//     const tx = api.tx.Revive.instantiate_with_code({
//         data: Binary.fromHex("0x1234567812345678"),
//         value: BigInt(0),
//         gas_limit: {
//             ref_time: BigInt(1e5),
//             proof_size: BigInt(1e5),
//         },
//         storage_deposit_limit: BigInt(1e10),
//         code: Binary.fromBytes(binaryData),
//         salt: undefined
//     })

//     let result = await tx.signAndSubmit(signer)

//     // from this message, we can get the ss58 address of deployed contract.
//     // System {
//     //   type: 'NewAccount',
//     //   value: { account: '5HFF42Lew3aWoEkyzntjjCV41aXkGVjVBJdS7s5MwJcAF4d9' }
//     // }

//     // event.type is System
//     // event.value.type is NewAccount
//     // event.value.value get account is 5HFF42Lew3aWoEkyzntjjCV41aXkGVjVBJdS7s5MwJcAF4d9
//     console.log(result)

//     let address = ""
//     for (const event of result.events) {
//         console.log("=======================")
//         console.log("type is ", event.type);
//         console.log("++ ")
//         console.log("value is ", event.value);
//         console.log("value in value is ", event.value.value.toString());
//         if (event.type === "System" && event.value.type === "NewAccount") {
//             address = event.value.value.account
//             console.log("address is ", address)
//         }

//     }
//     console.log("ss58 address is ", address)
//     if (address.length === 0) {
//         throw new Error("No contract address found in events");
//     }
    
//     const erc20Address = ss58ToEthAddress(address)
//     console.log("erc20 address is ", erc20Address)
// }