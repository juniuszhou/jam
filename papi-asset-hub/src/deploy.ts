import { config } from "dotenv";
import {} from "viem/accounts";
import { getAhApi, getClient, getLocalApi } from "./api";
import { getAlice, getSignerAh } from "./signer";
import { PolkadotClient } from "polkadot-api";
import { mapAccount } from "./map";
// import { u8aToHex } from '@polkadot/util'
// import { mnemonicToMiniSecret, sr25519PairFromSeed, cryptoWaitReady } from "@polkadot/util-crypto";

import {
  DEV_PHRASE,
  entropyToMiniSecret,
  KeyPair,
  mnemonicToEntropy,
} from "@polkadot-labs/hdkd-helpers";

import { sr25519CreateDerive } from "@polkadot-labs/hdkd";

import { getWsProvider } from "polkadot-api/ws-provider/web";
import { createClient } from "polkadot-api";
import { ss58Address } from "@polkadot-labs/hdkd-helpers";
import { hub, local } from "@polkadot-api/descriptors";
// import { readFileSync } from DelayNode.readFileSync;
import { readFileSync } from "fs";
import { Binary, TypedApi } from "polkadot-api";
import { getPolkadotSigner, PolkadotSigner } from "polkadot-api/signer";
import { ss58ToEthAddress } from "./convert";
import { encodeAbiParameters, parseAbiParameters } from "viem";

const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
  return ss58Address(publickey, SS58_PREFIX);
}

function splitIntoChunks(strInput: string, chunkSize: number = 64): string[] {
  const str = strInput.replace("0x", "");
  const chunks: string[] = [];

  for (let i = 0; i < str.length; i += chunkSize) {
    const chunk = str.slice(i, i + chunkSize);
    console.log(chunk);
    chunks.push(chunk);
  }

  return chunks;
}

export async function deploy(
  api: TypedApi<typeof local | typeof hub>,
  signer: PolkadotSigner,
  name: string,
) {
  const path = "../rust-contract/" + name + ".polkavm";
  const binaryData = readFileSync(path);

  // input for selector contract
  const constructorInput = getErc20ConstructorInput();
  splitIntoChunks(constructorInput, 64);

  // console.log("constructorInput is ", constructorInput)

  // api.apis.Core.

  // const tx = api.tx.Revive.call({
  //     dest: Binary.fromHex("0x1234567812345678"),
  //     data: Binary.fromHex(constructorInput),
  //     value: BigInt(0),
  //     gas_limit: {
  //         // computation cost
  //         ref_time: BigInt(1e12),
  //         // storage cost
  //         proof_size: BigInt(1e6),
  //     },
  //     storage_deposit_limit: BigInt(1e18),
  // });

  // submit code
  const tx = api.tx.Revive.instantiate_with_code({
    // input for constructor
    // data: Binary.fromHex("0x1234567812345678"),
    data: Binary.fromHex(constructorInput),
    value: BigInt(0),
    gas_limit: {
      // computation cost
      ref_time: BigInt(1e12),
      // storage cost
      proof_size: BigInt(2 * 1e6),
    },
    storage_deposit_limit: BigInt(2 * 1e18),
    code: Binary.fromBytes(binaryData),
    salt: undefined,
  });

  let result = await tx.signAndSubmit(signer);

  // from this message, we can get the ss58 address of deployed contract.
  // System {
  //   type: 'NewAccount',
  //   value: { account: '5HFF42Lew3aWoEkyzntjjCV41aXkGVjVBJdS7s5MwJcAF4d9' }
  // }

  // event.type is System
  // event.value.type is NewAccount
  // event.value.value get account is 5HFF42Lew3aWoEkyzntjjCV41aXkGVjVBJdS7s5MwJcAF4d9
  console.log(result);

  let address = "";
  for (const event of result.events) {
    console.log("=======================");
    console.log("type is ", event.type);
    console.log("++ ");
    console.log("value is ", event.value);
    console.log("value in value is ", event.value.value.toString());
    if (event.type === "System" && event.value.type === "NewAccount") {
      address = event.value.value.account;
      console.log("address is ", address);
    }
  }
  console.log("ss58 address is ", address);
  if (address.length === 0) {
    throw new Error("No contract address found in events");
  }

  const erc20Address = ss58ToEthAddress(address);
  console.log("erc20 address is ", erc20Address);
}

export async function deployEVM() {
}

async function deployLocal(client: PolkadotClient, name: string) {
  let api = await getLocalApi(client);
  //  api.apis.ReviveApi.gas_price()
  let signer = await getAlice();
  await mapAccount(api, signer);
  let result = await deploy(api, signer, name);
}

async function deployAh(client: PolkadotClient, name: string) {
  let api = await getAhApi(client);
  // api.apis.ReviveApi.get_storage()
  let signer = await getSignerAh();
  let result = await deploy(api, signer, name);
}

async function main() {
  // let client = await getClient("http://127.0.0.1:9944")
  // await deployLocal(client, "erc20")

  let client = await getClient("wss://westend-asset-hub-rpc.polkadot.io");
  await deployAh(client, "erc20");

  client.destroy();
}

main();

function getErc20ConstructorInput() {
  // input for selector contract
  const constructorInput = encodeAbiParameters([
    {
      type: "string",
      // much easier to recognize the name in hex format
      name: "aaaazzzz",
    },
    {
      type: "string",
      name: "bbbbyyyy",
    },
    {
      type: "uint256",
      name: "decimals",
    },

    {
      type: "uint256",
      name: "totalSupply",
    },
  ], [
    "name",
    "symbol",
    BigInt(18),
    BigInt(1e12),
  ]);

  // console.log("constructorInput is ", constructorInput)
  return constructorInput;
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
