import {
  createPublicClient,
  createWalletClient,
  defineChain,
  getContract,
  http,
  publicActions,
  PublicClient,
} from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { ethers } from "ethers";
import { config } from "dotenv";
import {ABI} from "./erc20.ts"

export type EThClientUrl = "https://westend-asset-hub-eth-rpc.polkadot.io" | "http//127.0.1:8545"

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

export function getPublicClient(url: EThClientUrl) {
  const client = createPublicClient({
    chain: ahChain(url),
    transport: http(),
  })

  return client
}

export function getWalletClient(url: EThClientUrl) {
  config();
  // const privateKey = Deno.env.get("AH_PRIVATE_KEY") || "";
  const privateKey = "af4f69eb98125129fb83cbf12ac15737e65ef169bdd02544ea087a216fb92b14"
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

export function getERC20Contract(client: PublicClient) {
  // erc20 contract address
  const contractAddress = "0x029E8b232e5A058a1e6f1C122614c3D6a6fBA53E";
  const contract = getContract({
    address: contractAddress,
    abi: ABI,
    client,
  })
  return contract
}
