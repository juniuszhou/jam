import { createWalletClient, defineChain, Hex, http, parseEther, publicActions } from 'viem'
import { readFileSync } from 'node:fs'
import { walletClient } from './utils'

function assert(condition: any, message: string): asserts condition {
    if (!condition) {
        throw new Error(message)
    }
}

function getByteCode(name: string): Hex {
    const bytecode = readFileSync(`pvm/${name}.polkavm`)
    return `0x${Buffer.from(bytecode).toString('hex')}`
}

async function main() {
    const piggyBankAbi = [
        {
            inputs: [],
            stateMutability: 'nonpayable',
            type: 'constructor',
        },
        {
            inputs: [],
            name: 'deposit',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'payable',
            type: 'function',
        },
        {
            inputs: [],
            name: 'getDeposit',
            outputs: [
                {
                    internalType: 'uint256',
                    name: '',
                    type: 'uint256',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    internalType: 'address',
                    name: '',
                    type: 'address',
                },
            ],
            stateMutability: 'view',
            type: 'function',
        },
        {
            inputs: [
                {
                    internalType: 'uint256',
                    name: 'withdrawAmount',
                    type: 'uint256',
                },
            ],
            name: 'withdraw',
            outputs: [
                {
                    internalType: 'uint256',
                    name: 'remainingBal',
                    type: 'uint256',
                },
            ],
            stateMutability: 'nonpayable',
            type: 'function',
        },
    ] as const;
    const piggyBankByteCode = getByteCode("piggyBank")
    const wallet = await walletClient;

    const hash = await wallet.deployContract({
        abi: piggyBankAbi,
        bytecode: getByteCode('piggyBank'),
    })

    const deployReceipt = await wallet.waitForTransactionReceipt({ hash })
    const contractAddress = deployReceipt.contractAddress
    console.log('Contract deployed:', contractAddress)
    assert(contractAddress, 'Contract address should be set')

    const balance = await wallet.readContract({
        address: contractAddress,
        abi: piggyBankAbi,
        functionName: 'getDeposit',
    })

    console.log(`Get deposit: ${balance}`)

    {
        const result = await wallet.estimateContractGas({
            account: wallet.account,
            address: contractAddress,
            abi: piggyBankAbi,
            functionName: 'deposit',
            value: parseEther('10'),
        })

        console.log(`Gas estimate: ${result}`)

        const { request } = await wallet.simulateContract({
            account: wallet.account,
            address: contractAddress,
            abi: piggyBankAbi,
            functionName: 'deposit',
            value: parseEther('10'),
        })

        // request.nonce = 0
        const hash = await wallet.writeContract(request)

        const receipt = await wallet.waitForTransactionReceipt({ hash })
        console.log(`Deposit receipt: ${receipt.status}`)

        const balance = await wallet.readContract({
            address: contractAddress,
            abi: piggyBankAbi,
            functionName: 'getDeposit',
        })

        console.log(`Get deposit: ${balance}`)
        // if (process.env.STOP) {
        //     process.exit(0)
        // }
    }
}

main()
