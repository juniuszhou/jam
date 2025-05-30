// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import {
  generateRandomEthersWallet,
  getEtherClient,
  getEtherProvider,
} from "./eth";
import { ABI } from "./erc20";

import { Contract, JsonRpcProvider, Wallet } from "ethers";
import { exit } from "node:process";

export async function verifyContract(
  walletClient: Wallet,
  provider: JsonRpcProvider,
  contractAddress: string,
) {
  const contract = new Contract(
    contractAddress,
    ABI,
    walletClient,
  );

  // wallet from env private key
  const walletAddress = await walletClient.getAddress();

  // generate a random wallet for transferFrom test
  const randomWalletClient = await generateRandomEthersWallet(provider);
  const recipientAddress = await randomWalletClient.getAddress();

  console.log("=========================");
  const name = await contract.name();
  const symbol = await contract.symbol();
  const decimals = await contract.decimals();
  const totalSupply = await contract.totalSupply();
  const balance = await contract.balanceOf(walletAddress);
  const allowance = await contract.allowance(walletAddress, recipientAddress);

  // transfer native token to new wallet for sending transferFrom later
  const transferAmount = BigInt(1e18);
  const tx = {
    to: recipientAddress,
    value: transferAmount,
  };
  const txResponse = await walletClient.sendTransaction(tx);
  await txResponse.wait();
  const recipientBalance = await provider.getBalance(recipientAddress);
  console.log("Recipient balance after transfer: ", recipientBalance);

  // check init status

  console.log("Name: ", name);
  console.log("Symbol: ", symbol);
  console.log("Decimals: ", decimals);
  console.log("Total Supply: ", totalSupply);

  console.log("Balance: ", balance);
  console.log("Allowance: ", allowance);

  // test transfer
  console.log("recipientAddress: ", recipientAddress);
  // const transferAmount = BigInt(1e18);
  const transferTx = await contract.transfer(recipientAddress, transferAmount);
  await transferTx.wait();
  console.log("Transfer transaction hash: ", transferTx.hash);

  const myBalanceAfterTransfer = await contract.balanceOf(walletAddress);
  const randomBalanceAfterTransfer = await contract.balanceOf(recipientAddress);
  console.log(
    "My balance after transfer: ",
    myBalanceAfterTransfer / BigInt(1e18),
  );
  console.log(
    "Random wallet balance after transfer: ",
    randomBalanceAfterTransfer / BigInt(1e18),
  );

  // test approve
  const approveAmount = BigInt(2e18);
  const approveTx = await contract.approve(recipientAddress, approveAmount);
  await approveTx.wait();
  //  console.log("============= Approve transaction hash: ", approveTx.hash);
  const approveAllowance = await contract.allowance(
    walletAddress,
    recipientAddress,
  );
  console.log("Approve allowance: ", approveAllowance / BigInt(1e18));

  const contract2 = new Contract(
    contractAddress,
    ABI,
    randomWalletClient,
  );

  console.log("============= ");

  // test transferFrom, just transfer back to the original wallet
  const transferFromTx = await contract2.transferFrom(
    walletAddress,
    walletAddress,
    approveAmount / BigInt(2),
  );
  await transferFromTx.wait();
  const allowanceAfterTransferFrom = await contract.allowance(
    walletAddress,
    recipientAddress,
  );
  console.log(
    "Approve allowance after transferFrom: ",
    allowanceAfterTransferFrom / BigInt(1e18),
  );
}

export async function main() {
  // const url = "https://westend-asset-hub-eth-rpc.polkadot.io";
  const url = "http://127.0.0.1:8545";

  const provider = getEtherProvider(url);
  const walletClient = await getEtherClient(provider, url);

  const contractAddress = "0x493275370aF3f63d9ccd10a6539435121cF4fbb9";
  provider.destroy();
  exit(0);
}

// main();
