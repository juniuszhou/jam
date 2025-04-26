import { getWsProvider } from "polkadot-api/ws-provider/web";
import { createClient } from "polkadot-api";
import { ss58Address } from "@polkadot-labs/hdkd-helpers";
import { hub, local } from "../.papi/descriptors/src/index.ts";
import { PolkadotClient } from "polkadot-api";

const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
  return ss58Address(publickey, SS58_PREFIX);
}

export function getClient(
  url: "http://127.0.0.1:9944" | "wss://westend-asset-hub-rpc.polkadot.io",
) {
  // const url = "http://127.0.0.1:9944"
  const provider = getWsProvider(url);
  const client = createClient(provider);
  return client;
}

export function getLocalApi(client: PolkadotClient) {
  const api = client.getTypedApi(local);
  return api;
}

export function getAhApi(client: PolkadotClient) {
  const api = client.getTypedApi(hub);
  return api;
}
