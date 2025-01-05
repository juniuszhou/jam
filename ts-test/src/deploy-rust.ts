// create a api instance, get the balance
import { ApiPromise, WsProvider } from '@polkadot/api';

async function getBalance() {
    const wsProvider = new WsProvider('wss://rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    const accountInfo = await api.query.system.account("address");
    const { data: { free } } = accountInfo.toHuman() as { data: { free: string } };
    console.log("free balance is ", free);

    // console.log(`The previous free balance was ${previousFree}, nonce ${previousNonce}`);
}

getBalance();
