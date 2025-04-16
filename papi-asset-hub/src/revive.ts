import { Binary, TypedApi } from "polkadot-api"
import { hub, local } from "@polkadot-api/descriptors"
import {fromHex, getAddress} from "viem"
import {keccak256} from "viem"

// both are hex string
export async function getStorage(api: TypedApi<typeof hub>, contractAddress: string, key: string) {

    const conKey = contractAddress + key
    const storageKey = keccak256(`0x${conKey}`)   
    console.log("storageKey is ", storageKey)

    let data = await api.apis.ReviveApi.get_storage(
        Binary.fromHex(contractAddress),
        Binary.fromHex(storageKey),
    )
}

