import { walletClient } from "./utils";
import { parseEther } from 'viem'

async function main() {
    const wallet = await walletClient;

    // get alith balance
    console.log("balance is ", await wallet.getBalance({address: wallet.account.address}));


    console.log("recipient is ", await wallet.getBalance({address: '0xABCaD56aa87f3718C8892B48cB443c017Cd632BB'}));

    await wallet.sendTransaction({
		to: '0xABCaD56aa87f3718C8892B48cB443c017Cd632BB',
		value: parseEther('1.0'),
	})

    // sleep 6 seconds
    await new Promise(resolve => setTimeout(resolve, 6000));

    console.log("recipient is ", await wallet.getBalance({address: '0xABCaD56aa87f3718C8892B48cB443c017Cd632BB'}));

}

main()


