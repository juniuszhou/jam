// import { getPublicClient, getWalletClient, ClientUrl } from "./eth"
import { encodeAbiParameters, parseAbiParameters } from "viem";

async function main() {
  // const publicClient = await getPublicClient(ClientUrl)
  // const walletClient = await getWalletClient(ClientUrl)
  // client.destroy()

  // const deployedContract = getContract({ address: contractAddress, abi: ABI, client: walletClient })
  // const tx2 = await deployedContract.write.transfer(["0x70997970C51812dc3A010C7d01b50e0d17dc79C8", 10000])
}

function splitIntoChunks(str: string, chunkSize: number = 64): string[] {
  const chunks: string[] = [];

  for (let i = 0; i < str.length; i += chunkSize) {
    chunks.push(str.slice(i, i + chunkSize));
  }

  return chunks;
}

function notUsed() {
  // const erc20Balance = await publicClient.readContract({ address: contractAddress, abi: ABI, functionName: "balanceOf", args: ["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"] })

  // console.log(`result is ${erc20Balance}`)

  // input for selector contract
  const constructorInput = encodeAbiParameters([
    {
      type: "string",
      name: "owner",
    },
    {
      type: "string",
      name: "owner",
    },
    {
      type: "uint256",
      name: "totalSupply",
    },

    {
      type: "uint256",
      name: "totalSupply",
    },
  ], [
    "12345678abcdefgh",
    "12345678abcdefgh",
    BigInt(1234567812345678),
    BigInt(1234567812345678),
    // BigInt(1234567812345678), BigInt(1234567812345678),
  ]);

  console.log("constructorInput is ", constructorInput);
  const chunks = splitIntoChunks(constructorInput.replace("0x", ""));
  console.log("chunks are ", chunks);
  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];
    console.log(`Chunk ${i + 1}: ${chunk}`);
  }
}

main();
