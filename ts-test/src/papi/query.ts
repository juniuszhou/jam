import { asset } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';

async function main() {
    // const provider = getWsProvider('wss://westend-asset-hub-rpc.polkadot.io');
    const provider = getWsProvider('ws://10.0.0.11:9944');
    const client = createClient(provider);
    const dotApi = client.getTypedApi(asset);
    const existentialDeposit = (await dotApi.constants.Balances.ExistentialDeposit()).toString();
    console.log(existentialDeposit);
    const balance = await dotApi.query.System.Account.getValue("5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY");
    console.log(balance["data"]["free"].toString());
}

main()
