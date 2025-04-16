import { config } from "dotenv";
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
import { readFileSync } from "fs";
import { Binary, PolkadotClient } from "polkadot-api";
import { getPolkadotSigner } from "polkadot-api/signer";
import { ss58ToEthAddress } from "./convert";
import { MultiAddress } from "@polkadot-api/descriptors";

// import { MultiAddress } from "@polkadot/types";

const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
  return ss58Address(publickey, SS58_PREFIX);
}

export async function getClient(
  url: "http://127.0.0.1:9944" | "wss://westend-asset-hub-rpc.polkadot.io",
) {
  // const url = "http://127.0.0.1:9944"
  const provider = getWsProvider(url);
  const client = createClient(provider);
  return client;
}

export async function getLocalApi(client: PolkadotClient) {
  const api = client.getTypedApi(local);
  return api;
}

export async function getAhApi(client: PolkadotClient) {
  const api = client.getTypedApi(hub);
  return api;
}
