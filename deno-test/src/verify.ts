// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import {getPublicClient, getWalletClient} from "./eth.ts";
import {ABI} from "./erc20.ts"

async function main() {
  const publicClient = await getPublicClient("https://westend-asset-hub-eth-rpc.polkadot.io")
  const walletClient = await getWalletClient("https://westend-asset-hub-eth-rpc.polkadot.io")
  // client.destroy()

  const myAddress = walletClient.account.address;
  const validAddress = myAddress.replace("0x", "");
  if (!myAddress) {
    throw new Error("No address found");
  }

  console.log("my address is ", myAddress);
  console.log("balance is ", await publicClient.getBalance({address:`0x${validAddress}`}))
  const erc20Address = "0xB5bE8AB95565E5c6916bAbF16F604357630c69a0"

  await publicClient.readContract({
    address: erc20Address,
    abi: ABI,
    functionName: "name",
    args: [],
  }).then((result) => {
    console.log("result is ", result);
  }).catch((error) => {
    console.error("error is ", error);
  });

  await publicClient.readContract({
    address: erc20Address,
    abi: ABI,
    functionName: "symbol",
    args: [],
  }).then((result) => {
    console.log("result is ", result);
  }).catch((error) => {
    console.error("error is ", error);
  });

  await publicClient.readContract({
    address: erc20Address,
    abi: ABI,
    functionName: "decimals",
    args: [],
  }).then((result) => {
    console.log("result is ", result);
  }).catch((error) => {
    console.error("error is ", error);
  });

  await publicClient.readContract({
    address: erc20Address,
    abi: ABI,
    functionName: "totalSupply",
    args: [],
  }).then((result) => {
    
    console.log("result is ", result);
    const totalSupply = result as bigint;
    console.log("totalSupply is ", totalSupply / BigInt(10 ** 18));
  }).catch((error) => {
    console.error("error is ", error);
  });

  await publicClient.readContract({
    address: erc20Address,
    abi: ABI,
    functionName: "balanceOf",
    args: [myAddress],
  }).then((result) => {
    
    console.log("result is ", result);
    const totalSupply = result as bigint;
    console.log("balanceOf is ", totalSupply / BigInt(10 ** 18));
  }).catch((error) => {
    console.error("error is ", error);
  });
  
}


main();
