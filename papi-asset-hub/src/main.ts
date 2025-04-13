import { deployLocal, deployAh } from "./deploy";
import {getLocalApi, getAhApi} from "./api"
import { getAlice, getSignerAh } from "./signer";
import {mapLocal} from "./map";
import { ss58ToEthAddress } from "./convert";

async function main() {

    // deploy local
    let api = await getLocalApi()
    let signer = await getAlice()
    await mapLocal(api, signer)
    let result = await deployLocal(api, signer, "immutable")

     // deploy ah
    //  let api = await getAhApi()
    //  let signer = await getSignerAh()
    //  let result = await deployAh(api, signer, "immutable")

}

main()