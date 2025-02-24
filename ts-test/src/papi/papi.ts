import { asset } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { Keyring } from '@polkadot/api';
import { sr25519 } from "@polkadot-labs/hdkd-helpers"
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { getPolkadotSigner } from "polkadot-api/signer"

async function main() {
    // const provider = getWsProvider('ws://10.0.0.11:9944');
    const provider = getWsProvider('wss://westend-asset-hub-rpc.polkadot.io');
    const client = createClient(provider);
    const dotApi = client.getTypedApi(asset);
    // const balance = dotApi.query.Balances.Account("0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133");

    // get constant
    const metadata = (await dotApi.constants.Balances.ExistentialDeposit()).toString();
    console.log(metadata);

    const balance = await dotApi.query.System.Account.getValue("5FuwwzpHSYp8k1Bmv9fC394vGNdwqAvPRCmqYqdv3KrXpXWi");
    console.log(balance["data"]["free"].toString());

    require('dotenv').config();
    const privateKey = process.env.PRIVATE_KEY?.toString();
    if (!privateKey) {
        throw new Error("PRIVATE_KEY environment variable is not set.");


    }

    // dotApi.apis.



    const keyring = new Keyring({ type: "sr25519" });
    const seed = Buffer.from(privateKey, "hex");

    // let signer = getPolkadotSigner(sr25519.getPublicKey(seed), "Sr25519", ("input") => sr25519.sign("input", seed));

    // const account = keyring.addFromSeed(seed, "sr25519");
    // console.log(account.address.toString());
}

main()
