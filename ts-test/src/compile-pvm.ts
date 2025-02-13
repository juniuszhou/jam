import { compile } from '@parity/revive'
import { readFileSync, writeFileSync } from 'fs'

async function main() {
    console.log("Current path:", process.cwd());
    const file = "PiggyBank.sol"
    const contract = "PiggyBank"
    const inputFile = "./contracts/PiggyBank.sol";
    const input = readFileSync(inputFile, 'utf8')
    const out = await compile({
        [file]: { content: input },
    });

    console.log(out)


    const entry = out.contracts[file][contract]

    console.log(entry)

    const outPath = "./pvm/PiggyBank.polkavm";

    console.log(entry.evm.bytecode.object)

    writeFileSync(
        outPath,
        Buffer.from(entry.evm.bytecode.object, 'hex')
    )

}

main()