// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import {getPublicClient} from "./eth.ts";
import {ABI} from "./erc20.ts"

async function main() {
  const publicClient = await getPublicClient("https://westend-asset-hub-eth-rpc.polkadot.io")
  // const walletClient = await getWalletClient(ClientUrl)
  // client.destroy()

  const erc20Address = "0x26E92ebE2F3cc939C517266f6A316440EaD55d8F"

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
  
}


main();
