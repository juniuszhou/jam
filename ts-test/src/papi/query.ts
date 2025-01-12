import { asset } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { Keyring } from '@polkadot/api';
import { sr25519 } from "@polkadot-labs/hdkd-helpers"
// Use this import for Node.js environments
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { getPolkadotSigner } from "polkadot-api/signer"

async function main() {
    // const provider = getWsProvider('wss://westend-asset-hub-rpc.polkadot.io');
    const provider = getWsProvider('ws://10.0.0.11:9944');
    const client = createClient(provider);
    const dotApi = client.getTypedApi(asset);
    // const balance = dotApi.query.Balances.Account("0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133");

    // get constant 
    // 100000000000000
    const metadata = (await dotApi.constants.Balances.ExistentialDeposit()).toString();
    console.log(metadata);

    // get balance of alice
    // 999876533837672544154
    const balance = await dotApi.query.System.Account.getValue("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY");
    console.log(balance["data"]["free"].toString());

}

main()
