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
import { ethers, JsonRpcProvider } from "ethers";
import { config } from "dotenv";
import {ABI} from "./erc20.ts"
import process from "node:process";
export type EThClientUrl = "https://westend-asset-hub-eth-rpc.polkadot.io" | "http://127.0.0.1:8545"

export const ahChain = (url: string, id: number) =>
  defineChain({
    id: id,
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

  // defaut chain id is for westend-asset-hub-eth-rpc.polkadot.io
export function getPublicClient(url: EThClientUrl, id: number = 420420421 ) {
  const client = createPublicClient({
    chain: ahChain(url, id),
    transport: http(),
  })

  return client
}

export function getWalletClient(url: EThClientUrl, id: number = 420420421) {
  config();
  console.log("AH pirvate key is ",  process.env.AH_PRIV_KEY);
  let privateKey;
  if (url === "https://westend-asset-hub-eth-rpc.polkadot.io") {privateKey =  process.env.AH_PRIV_KEY || "";}
  else {
    privateKey = process.env.LOCAL_PRIV_KEY || "";
  }

  const validPrivateKey = privateKey.replace("0x", "");
  const account = privateKeyToAccount(`0x${validPrivateKey}`);
  const wallet = createWalletClient({
    account,
    chain: ahChain(url, id),
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

export function getEtherProvider(url: EThClientUrl) {
  const provider = new ethers.JsonRpcProvider(url);
  return provider
}

export function getEtherClient(provider: JsonRpcProvider, url: EThClientUrl) {
  // const provider = new ethers.JsonRpcProvider(url);
  config();
  let privateKey
  
  if (url === "https://westend-asset-hub-eth-rpc.polkadot.io") {
    privateKey = process.env.AH_PRIV_KEY || ""}
  else {
    privateKey = process.env.LOCAL_PRIV_KEY || ""  };

    const wallet = new ethers.Wallet(privateKey, provider);
    return wallet;
}

export function generateRandomEthersWallet(provider: JsonRpcProvider) {
  const account = ethers.Wallet.createRandom();
  // const provider = new ethers.JsonRpcProvider(url);

  const wallet = new ethers.Wallet(account.privateKey, provider);
  return wallet;
}