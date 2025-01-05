
import { compile } from '@parity/revive'
import { format } from 'prettier'
import { parseArgs } from 'node:util'
// import solc from 'solc';
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// for (const { keypath, contract, file } of input) {
// 	const input = {
// 		[file]: { content: readFileSync(join('contracts', file), 'utf8') },
// 	}

// 	{
// 		console.log(`Compile with solc ${file}`)
// 		const out = JSON.parse(evmCompile(input))
// 		const entry = out.contracts[file][contract]
// 		writeFileSync(join('evm', `${keypath}.bin`), Buffer.from(entry.evm.bytecode.object, 'hex'))
// 		writeFileSync(
// 			join('abi', `${keypath}.ts`),
// 			await format(`export const abi = ${JSON.stringify(entry.abi, null, 2)} as const`, {
// 				parser: 'typescript',
// 			})
// 		)
// 	}

// 	{
// 		console.log(`Compile with revive ${file}`)
// 		const out = await compile(input)
// 		const entry = out.contracts[file][contract]
// 		writeFileSync(
// 			join('pvm', `${keypath}.polkavm`),
// 			Buffer.from(entry.evm.bytecode.object, 'hex')
// 		)
// 	}
// }

type CompileInput = Parameters<typeof compile>[0]

// function evmCompile(sources: CompileInput) {
// 	const input = {
// 		language: 'Solidity',
// 		sources,
// 		settings: {
// 			outputSelection: {
// 				'*': {
// 					'*': ['*'],
// 				},
// 			},
// 		},
// 	}

// 	return solc.compile(JSON.stringify(input))
// }

// { file: 'Event.sol', contract: 'EventExample', keypath: 'event' },
// { file: 'PiggyBank.sol', contract: 'PiggyBank', keypath: 'piggyBank' },
// { file: 'ErrorTester.sol', contract: 'ErrorTester', keypath: 'errorTester' },

async function compileContract(fileName: string, contractName: string, keypath: string) {
    console.log("start to run");

    // read file
    const content = readFileSync(join('contracts', fileName), 'utf8');

    const input = {[fileName]: {content}};

    // compile evm 
    // const out = JSON.parse(evmCompile(input));

    // get contract data
    // const entry = out.contracts[fileName][contractName];

    // write binary
    // writeFileSync(join('evm', `${contractName}.bin`), Buffer.from(entry.evm.bytecode.object, 'hex'));

    // write abi
    // writeFileSync(
    //     join('abi', `${contractName}.ts`),
    //     await format(`export const abi = ${JSON.stringify(entry.abi, null, 2)} as const`, {
    //         parser: 'typescript',
    //     })
    // )

    
        // compile with revive
        const out = await compile(input)
        // writeFileSync(
        //     join('pvm', `${keypath}.json`),
        //     Buffer.from(out.contracts[fileName][contractName], 'utf-8')
        // )

        console.log(out.contracts[fileName]);

        const entry = out.contracts[fileName][contractName]
        writeFileSync(
            join('pvm', `${keypath}.polkavm`),
            Buffer.from(entry.evm.bytecode.object, 'hex')
        )

}

compileContract("PiggyBank.sol", "PiggyBank", "piggyBank");