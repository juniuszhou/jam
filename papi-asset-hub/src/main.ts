import { deploy } from "./deploy";
import {getLocalApi, getAhApi, getClient} from "./api"
import { getAlice, getSignerAh,  } from "./signer";
import {mapLocal} from "./map";
import { PolkadotClient } from "polkadot-api";

async function deployLocal(client: PolkadotClient, name: string) {
     let api = await getLocalApi(client)
    //  api.apis.ReviveApi.gas_price()
    let signer = await getAlice()
    await mapLocal(api, signer)
    let result = await deploy(api, signer, name)
}

async function deployAh(client: PolkadotClient, name: string) {
    let api = await getAhApi(client)
    // api.apis.ReviveApi.get_storage()
     let signer = await getSignerAh()
     let result = await deploy(api, signer, name)
}

async function main() {
    // let client = await getClient("http://127.0.0.1:9944")
    // await deployLocal(client, "immutable")

    let client = await getClient("wss://westend-asset-hub-rpc.polkadot.io")
    await deployAh(client, "selector")
   

    client.destroy()

}

main()
