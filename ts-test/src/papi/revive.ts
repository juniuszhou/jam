import { asset } from '@polkadot-api/descriptors';
import { Binary, createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { readFileSync } from 'node:fs'
import { getApi } from './utils'

async function main() {
    const api = getApi('wss://westend-asset-hub-rpc.polkadot.io');
    const bytecode = readFileSync("./pvm/PiggyBank.polkavm");

    const tx = api.tx.Revive.upload_code({ code: Binary.fromBytes(bytecode), storage_deposit_limit: BigInt(100000000) });



}

main()