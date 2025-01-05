import { walletClient } from "./utils";


async function main() {
    const wallet = await walletClient;
    const balance = await wallet.getBalance({ address: '0xf24FF3a9CF04c71Dbc94D0b566f7A27B94566cac' });

    console.log(balance);
}

main()

