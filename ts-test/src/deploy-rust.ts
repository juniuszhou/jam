// create a api instance, get the balance
import { ApiPromise, WsProvider } from '@polkadot/api';

import { polkadotApi } from './utils';

async function getBalance() {
    const api = await polkadotApi;

    // get balance of alith
    const accountInfo = await api.query.system.account("0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133");
    const { data: { free } } = accountInfo.toHuman() as { data: { free: string } };
    console.log("free balance is ", free);

    // console.log(`The previous free balance was ${previousFree}, nonce ${previousNonce}`);

    const tx = api.tx.balances.transfer("0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133", 1000);
    const hash = await tx.signAndSend("0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133");
    console.log("Transaction hash: ", hash.toHex());
}

getBalance();
