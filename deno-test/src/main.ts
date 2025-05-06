import { deploy } from "./deploy.ts";
import { getAhApi, getClient, getLocalApi } from "./api.ts";
import { getAlice, getSignerAh } from "./signer.ts";
import { mapAccount } from "./map.ts";
import { PolkadotClient } from "polkadot-api";
import { config } from "dotenv";
import { privateKeyToAccount } from "viem/accounts";


async function main() {
  // let client = await getClient("http://127.0.0.1:9944")
  // await deployLocal(client, "immutable")

  // let client = await getClient("wss://westend-asset-hub-rpc.polkadot.io");
  // await deployAh(client, "selector");

  // client.destroy();

  config()
  const key = process.env.LOCAL_PRIV_KEY || "";
  const validPrivateKey = key.replace("0x", "");
  const account = privateKeyToAccount(`0x${validPrivateKey}`);
  console.log("key is ", account.address);

  const key2 = process.env.AH_PRIV_KEY || "";
  const validPrivateKey2 = key2.replace("0x", "");
  const account2 = privateKeyToAccount(`0x${validPrivateKey2}`);
  console.log("key is ", account2.address);
}

main();
