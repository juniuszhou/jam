// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import { getEtherProvider, getPublicClient, getWalletClient } from "./eth";
import { ABI, EMPTY_ABI } from "./erc20";
import { getEtherClient } from "./eth";
import { readFileSync } from "fs";
import { ethers } from "ethers";

import { verifyContract } from "./verify";

function uint8ArrayToHex(arr: Uint8Array): string {
  return Array.from(arr)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function getBytecode(name: string): string {
  const path = "../rust-contract/" + name + ".polkavm";
  console.log("path is ", path);
  const bytecode = readFileSync(path);
  const bytecodeHex = uint8ArrayToHex(bytecode);
  const validBytecode = bytecodeHex.replace("0x", "");
  // console.log("bytecode is ", validBytecode);
  return validBytecode;
}

async function deployWithEthers(name: string) {
  const url = "https://westend-asset-hub-eth-rpc.polkadot.io";
  // const url = "http://127.0.0.1:8545"
  const provider = getEtherProvider(url);
  const etherWallet = getEtherClient(provider, url);
  // etherWallet.connect();
  const myAddress = await etherWallet.getAddress();
  console.log("my address is ", myAddress);
  console.log("my balance is ", await provider.getBalance(myAddress));
  const bytecode = getBytecode(name);

  const factory = new ethers.ContractFactory(ABI, bytecode, etherWallet);
  // const contract = await factory.deploy()
  const contract = await factory.deploy(
    "name",
    // "aaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzzaaaazzzz",
    "symbol",
    BigInt(18),
    BigInt(1234),
    {
      // Gas parameters
      // gasLimit: 500,         // Maximum gas to use
      // gasPrice: ethers.parseUnits("50", "gwei"),  // Gas price in gwei
      // Or for EIP-1559 transactions:
      // maxFeePerGas: ethers.parseUnits("50", "gwei"),
      // maxPriorityFeePerGas: ethers.parseUnits("2", "gwei"),
    },
  );

  await contract.waitForDeployment();
  const contractAddress = contract.target.toString();
  console.log("contract address is ", contractAddress);

  await verifyContract(etherWallet, provider, contractAddress);

  provider.destroy();
}

async function deployWithViem(name: string) {
  const publicClient = await getPublicClient(
    "https://westend-asset-hub-eth-rpc.polkadot.io",
  );
  const walletClient = await getWalletClient(
    "https://westend-asset-hub-eth-rpc.polkadot.io",
  );

  const myAddress = walletClient.account.address;
  const validAddress = myAddress.replace("0x", "");
  if (!myAddress) {
    throw new Error("No address found");
  }

  const path = "../rust-contract/" + name + ".polkavm";
  console.log("path is ", path);
  const bytecode = readFileSync(path);
  const bytecodeHex = uint8ArrayToHex(bytecode);
  const invalidBytecode = bytecodeHex.replace("0x", "");

  console.log("bytecode is ", invalidBytecode);

  walletClient.deployContract({
    abi: ABI,
    bytecode: `0x${invalidBytecode}`,
    args: ["aaaazzzz", "bbbbyyyy", BigInt(18), BigInt(1e12)],
    account: myAddress,
    value: BigInt(0),
    gas: BigInt(10000000),
    maxFeePerGas: BigInt(1000000000),
    maxPriorityFeePerGas: BigInt(1000000000),
  }).then((result) => {
    console.log("result is ", result);
  }).catch((error) => {
    console.error("error is ", error);
  });

  console.log("my address is ", myAddress);
  console.log(
    "balance is ",
    await publicClient.getBalance({ address: `0x${validAddress}` }),
  );
}

deployWithEthers("name");
