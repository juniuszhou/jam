import { asset } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';

export type ClientUrlType = 'ws://10.0.0.11:9944' | 'wss://westend-asset-hub-rpc.polkadot.io';

export function getApi(url: ClientUrlType) {

    const provider = getWsProvider(url);
    // const provider = getWsProvider('wss://westend-asset-hub-rpc.polkadot.io');
    const client = createClient(provider);
    const dotApi = client.getTypedApi(asset);
    return dotApi
}

