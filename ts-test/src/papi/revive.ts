import { asset } from '@polkadot-api/descriptors';
import { Binary, createClient } from 'polkadot-api';
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { readFileSync } from 'node:fs'
import { getApi } from './utils'

async function main() {
    const api = getApi('ws://10.0.0.11:9944');
    const bytecode = readFileSync("../../../pvm/piggyBank.polkavm");

    api.tx.Revive.upload_code({ code: Binary.fromBytes(bytecode), storage_deposit_limit: BigInt(100000000) });


}

main()