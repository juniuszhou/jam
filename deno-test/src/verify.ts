// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import { generateRandomEthersWallet, getEtherClient, getEtherProvider} from "./eth";
import {ABI} from "./erc20"

import { Contract } from "ethers";
import { exit } from "node:process";

async function main() {
  // const url = "https://westend-asset-hub-eth-rpc.polkadot.io";
  const url = "http://127.0.0.1:8545"

  const provider = getEtherProvider(url);
  const walletClient = await getEtherClient(provider,url);
  const randomWalletClient = await generateRandomEthersWallet(provider);

  const contractAddress = "0x9c1da847B31C0973F26b1a2A3d5c04365a867703";

  const contract = new Contract (
     contractAddress,
     ABI,
     walletClient
  );

  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const totalSupply = await contract.totalSupply();
  const balance = await contract.balanceOf(walletClient.getAddress());
  const allowance = await contract.allowance(walletClient.getAddress(), randomWalletClient.getAddress());

  console.log("Name: ", name);
  console.log("Symbol: ", symbol);
  console.log("Decimals: ", decimals);
  console.log("Total Supply: ", totalSupply);
  console.log("Balance: ", balance);
  console.log("Allowance: ", allowance);

  // test transfer
  const recipientAddress = await randomWalletClient.getAddress();
  console.log("recipientAddress: ", recipientAddress);
  const transferAmount = BigInt(1e18);
  const transferTx = await contract.transfer(recipientAddress, transferAmount);
  await transferTx.wait();
  console.log("Transfer transaction hash: ", transferTx.hash);

  const myBalanceAfterTransfer = await contract.balanceOf(walletClient.getAddress());
  const randomBalanceAfterTransfer = await contract.balanceOf(randomWalletClient.getAddress());
  console.log("My balance after transfer: ", myBalanceAfterTransfer);
  console.log("Random wallet balance after transfer: ", randomBalanceAfterTransfer);

  // test approve
  const approveAmount = BigInt(1e18);
  const approveTx = await contract.approve(randomWalletClient.getAddress(), approveAmount);
  await approveTx.wait();
  console.log("============= Approve transaction hash: ", approveTx.hash);
  const approveAllowance = await contract.allowance(walletClient.getAddress(), randomWalletClient.getAddress());
  console.log("Approve allowance: ", approveAllowance);
  provider.destroy();
  exit(0)

}


main();
