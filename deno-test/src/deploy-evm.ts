// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import {getEtherProvider, getPublicClient, getWalletClient} from "./eth.ts";
import {ABI, EMPTY_ABI} from "./erc20.ts"
import { getEtherClient } from "./eth.ts";

import { ethers } from "ethers";
import { exit } from "node:process";
function uint8ArrayToHex(arr: Uint8Array): string {
  return Array.from(arr)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

function getBytecode(name: string): string {
  const path = "../rust-contract/" + name + ".polkavm"
  console.log("path is ", path);
  const bytecode = Deno.readFileSync(path);
  const bytecodeHex = uint8ArrayToHex(bytecode);
  const validBytecode = bytecodeHex.replace("0x", "");
  // console.log("bytecode is ", validBytecode);
  return validBytecode; 
}

async function deployWithEthers(name: string) {
  // const url = "https://westend-asset-hub-eth-rpc.polkadot.io";
  const url = "http://127.0.0.1:8545"
  const provider = getEtherProvider(url);
  const etherWallet = getEtherClient(provider, url);
  // etherWallet.connect();
  const myAddress = await etherWallet.getAddress();
  console.log("my address is ", myAddress);
  console.log("my balance is ", await provider.getBalance(myAddress));
  const bytecode = getBytecode(name);

  const factory = new ethers.ContractFactory(ABI, bytecode, etherWallet)
  const contract = await factory.deploy("aaaazzzz",
      "bbbbyyyy",
      BigInt(18),
      BigInt(1e12))

  await contract.waitForDeployment();
  const contractAddress = contract.target.toString()
  console.log("contract address is ", contractAddress);

  provider.destroy();
  exit(0);
}


async function deployWithViem(name: string  ) {
  const publicClient = await getPublicClient("https://westend-asset-hub-eth-rpc.polkadot.io")
  const walletClient = await getWalletClient("https://westend-asset-hub-eth-rpc.polkadot.io")


  const myAddress = walletClient.account.address;
  const validAddress = myAddress.replace("0x", "");
  if (!myAddress) {
    throw new Error("No address found");
  }

  const path = "../rust-contract/" + name + ".polkavm"
  console.log("path is ", path);
  const bytecode = Deno.readFileSync(path);
  const bytecodeHex = uint8ArrayToHex(bytecode);
  const invalidBytecode = bytecodeHex.replace("0x", "");

  console.log("bytecode is ", invalidBytecode);


  walletClient.deployContract({
    abi: ABI,
    bytecode: `0x${invalidBytecode}`,
    args: [ "aaaazzzz",
      "bbbbyyyy",
      BigInt(18),
      BigInt(1e12),],
    account: myAddress,
    value: 0n,
    gas: 10000000n,
    maxFeePerGas: 1000000000n,
    maxPriorityFeePerGas: 1000000000n,
  }).then((result) => {
    console.log("result is ", result);
  }).catch((error) => {
    console.error("error is ", error);
  });

  console.log("my address is ", myAddress);
  console.log("balance is ", await publicClient.getBalance({address:`0x${validAddress}`}))

}


deployWithEthers("erc20");
