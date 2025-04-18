import {
  createPublicClient,
  createWalletClient,
  defineChain,
  getContract,
  http,
  publicActions,
} from "viem";
import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import { ethers } from "ethers";
import { config } from "dotenv";

export const EThClientUrl = "https://westend-asset-hub-eth-rpc.polkadot.io";

export const ahChain = (url: string) =>
  defineChain({
    id: 420_420_420,
    name: "Testnet",
    network: "Testnet",
    nativeCurrency: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: {
        http: [url],
      },
    },
    testnet: true,
  });

export async function getPublicClient(url: string) {
  const wallet = createPublicClient({
    chain: ahChain(url),
    transport: http(),
  });

  return wallet.extend(publicActions);
}

export async function getWalletClient(url: string) {
  config();
  const privateKey = process.env.PRIVATE_KEY || "";
  const account = privateKeyToAccount(`0x${privateKey}`);
  const wallet = createWalletClient({
    account,
    chain: ahChain(url),
    transport: http(),
  });
  return wallet.extend(publicActions);
}

export async function getStorage() {
}

async function main() {
  const publicClient = await getPublicClient(EThClientUrl);
  const walletClient = await getWalletClient(EThClientUrl);
  // client.destroy()

  // const deployedContract = getContract({ address: contractAddress, abi: ABI, client: walletClient })
  // const tx2 = await deployedContract.write.transfer(["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 10000])

  // const erc20Balance = await publicClient.readContract({ address: contractAddress, abi: ABI, functionName: "balanceOf", args: ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"] })

  // console.log(`result is ${erc20Balance}`)
}

main();
