

import { MultiAddress } from "@polkadot-api/descriptors"
import { asset } from '@polkadot-api/descriptors';
import { createClient } from 'polkadot-api';
import { Keyring } from '@polkadot/api';
// Use this import for Node.js environments
import { getWsProvider } from 'polkadot-api/ws-provider/web';
import { getPolkadotSigner } from "polkadot-api/signer"
import {
    sr25519,
    DEV_PHRASE,
    entropyToMiniSecret,
    mnemonicToEntropy, ss58Address
} from "@polkadot-labs/hdkd-helpers"
import { sr25519CreateDerive } from "@polkadot-labs/hdkd"

async function main() {
    const provider = getWsProvider('ws://10.0.0.11:9944');
    // const provider = getWsProvider('wss://westend-asset-hub-rpc.polkadot.io');

    const client = createClient(provider);
    const dotApi = client.getTypedApi(asset);

    const entropy = mnemonicToEntropy(DEV_PHRASE)
    const miniSecret = entropyToMiniSecret(entropy)
    const derive = sr25519CreateDerive(miniSecret)

    const alice = derive("//Alice")

    console.log(ss58Address(alice.publicKey), alice.sign)

    const bob = derive("//Bob")

    const signer = getPolkadotSigner(alice.publicKey, "Sr25519", alice.sign)

    console.log(signer)

    // console.log(MultiAddress.Address32(bob.publicKey))

    // const dest = MultiAddress.Id("5FGWrHpqd3zzoVdbvuRvy1uLdDe22YaSrtrFLxRWHihZMmuL")
    const dest = MultiAddress.Id(ss58Address(bob.publicKey))

    /*
    {
        txHash: '0x803428a07a2e1c6de378e84a01249bc4f237df546a719bcd369e0418800f54cc',
        block: {
            index: 2,
            number: 1162,
            hash: '0x17aeb0944a33b848655c6fc3945bae1a3bd436e5fe92b0f15a2d7fe027764cc7'
        },
        ok: true,
        events: [
            { type: 'Balances', value: [Object], topics: [] },
            { type: 'Balances', value: [Object], topics: [] },
            { type: 'Balances', value: [Object], topics: [] },
            { type: 'Treasury', value: [Object], topics: [] },
            { type: 'Balances', value: [Object], topics: [] },
            { type: 'TransactionPayment', value: [Object], topics: [] },
            { type: 'System', value: [Object], topics: [] }
        ]
    }
  */
    const result = await dotApi.tx.Balances.transfer_keep_alive({
        dest,
        value: BigInt(123), // 1 DOT
    }).signAndSubmit(signer)

    console.log(result)
}

main()


