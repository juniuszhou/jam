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

    /*
    {
        meta: {
            phase: { type: 'ApplyExtrinsic', value: 2 },
            block: {
            hash: '0x9aa50c25fcc0801ab98d588a8faf8648a98b51adc01ebe2816e381348e6275c2',
            number: 1078,
            parent: '0xcf12ee84af9eff68b525d1d0c6a6b032accc914e80f05ed78b4d62d8170e076c'
            }
        },
        payload: {
            from: '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY',
            to: '5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty',
            amount: 1000000000000n
        }
    }
  */
    dotApi.event.Balances.Transfer.watch().pipe().forEach(console.log)
}

main()