import { createWalletClient, defineChain, http, publicActions } from "viem"
import { privateKeyToAccount } from 'viem/accounts'

export const chain = defineChain({
	id: 0 ? 1337 : 420420420,
	name: 'Asset Hub Westend',
	network: 'asset-hub',
	nativeCurrency: {
		name: 'Westie',
		symbol: 'WST',
		decimals: 18,
	},
	rpcUrls: {
		default: {
			http: ['http://localhost:8545'],
		},
	},
	testnet: true,
})

export const walletClient = (async () => {
    require('dotenv').config();
    const privateKey = process.env.PRIVATE_KEY;

    if (!privateKey) {
        throw new Error("PRIVATE_KEY is not defined in the environment variables.");
    }

    const account = privateKeyToAccount(`0x${privateKey}`)
    console.log(`Wallet address ${account.address}`)
    

    const wallet = createWalletClient({
        account,
        transport: http(),
        chain,
    })

    

    return wallet.extend(publicActions)
	
})()


async function main() {
       return `Hello, world!`;
}

main()

