import { sr25519CreateDerive } from "@polkadot-labs/hdkd"
import {
    sr25519,
    DEV_PHRASE,
    entropyToMiniSecret,
    mnemonicToEntropy,
} from "@polkadot-labs/hdkd-helpers"

async function main() {
    const entropy = mnemonicToEntropy(DEV_PHRASE)
    const miniSecret = entropyToMiniSecret(entropy)
    const derive = sr25519CreateDerive(miniSecret)

    // Example usage for generating a sr25519 keypair with hard derivation
    const keypair = derive("//Alice")

    // Example usage for signing a message
    const message = new TextEncoder().encode("Hello")
    const signature = keypair.sign(message)

    // Example usage for verifying a signature
    const isValid = sr25519.verify(signature, message, keypair.publicKey)
    console.log("Is valid:", isValid)
}

main()
