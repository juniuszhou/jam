// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import {getPublicClient, getWalletClient} from "./eth.ts";
import {ABI} from "./erc20.ts"

async function main() {
  const publicClient = await getPublicClient("https://westend-asset-hub-eth-rpc.polkadot.io")
  const walletClient = await getWalletClient("https://westend-asset-hub-eth-rpc.polkadot.io")

  const myAddress = walletClient.account.address;
  const validAddress = myAddress.replace("0x", "");
  if (!myAddress) {
    throw new Error("No address found");
  }

  console.log("my address is ", myAddress);
  console.log("balance is ", await publicClient.getBalance({address:`0x${validAddress}`}))

  
  
}


main();
