import { hexToBytes, toFunctionSelector } from "viem";

// Example usage
export function getSelectorForFunction(functionSignature: string): string {
  // For example: "transfer(address,uint256)"
  return toFunctionSelector(functionSignature);
}

function removePrefix(hex: string): string {
  const result = hex.replace("0x", "");
  return result;
}
// Add to your deploy.ts file
export async function erc20() {
  // ...existing code...

  // Example of getting selectors for common functions
  const transferSelector = getSelectorForFunction("transfer(address,uint256)");
  const balanceOfSelector = getSelectorForFunction("balanceOf(address)");
  const totalSupplySelector = getSelectorForFunction("totalSupply()");
  const name = removePrefix(getSelectorForFunction("name()"));
  const symbol = getSelectorForFunction("symbol()");
  const decimals = getSelectorForFunction("decimals()");
  const approve = getSelectorForFunction("approve(address,uint256)");
  const transferFrom = getSelectorForFunction(
    "transferFrom(address,address,uint256)",
  );

  console.log("Transfer selector:", transferSelector); // 0xa9059cbb
  console.log("BalanceOf selector:", balanceOfSelector); // 0x70a08231
  console.log("TotalSupply selector:", totalSupplySelector); // 0x18160ddd
  // console.log(hexToBytes("0x18160ddd"));                     // 0x06fdde03
  console.log("Name selector:", `0x${name}`); // 0x06fdde03
  console.log("Name selector:", hexToBytes(`0x${name}`)); // 0x06fdde03

  // ...rest of your deployment code...
}

erc20();
