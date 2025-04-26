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
import { hub, local } from "../.papi/descriptors/src/index.ts";
import { Binary, TypedApi } from "polkadot-api";
import { getPolkadotSigner, PolkadotSigner } from "polkadot-api/signer";
import { ss58ToEthAddress, ss58ToH160 } from "./convert.ts";
const SS58_PREFIX = 42;
export function convertPublicKeyToSs58(publickey: Uint8Array) {
  return ss58Address(publickey, SS58_PREFIX);
}

export async function mapAccount(
  api: TypedApi<typeof local> | TypedApi<typeof hub>,
  signer: PolkadotSigner,
) {
  const ss58Address = convertPublicKeyToSs58(signer.publicKey);
  const mapped = await api.query.Revive.OriginalAccount.getValue(
    ss58ToH160(ss58Address),
  );
  if (mapped) {
    console.log("Already mapped");
    return;
  }

  const tx = api.tx.Revive.map_account();

  let result = await tx.signAndSubmit(signer);
  console.log(result);
}
