import { deploy } from "./deploy";
import { ss58ToEthAddress } from "./convert";

async function main() {

    console.log(ss58ToEthAddress("5E2VBVQijercjsBazRaHjydQGguZrJHaeJdEpSkqCLdVeW2c"))

    // deploy("double")

}

main()