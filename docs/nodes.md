# nodes for try jam

## local nodes with revive

junius/polkadot-sdk-solochain-template revive branch

## official

polkadot-sdk/target/release/substrate-node

## build

cargo build --release
cargo run -p pallet-revive-eth-rpc

## startup

```bash
RUST_LOG="error,evm=debug,sc_rpc_server=info,runtime::revive=debug" cargo run --bin substrate-node -- --dev --unsafe-rpc-external
```

OR

```bash
RUST_LOG="error,evm=debug,sc_rpc_server=info,runtime::revive=debug" target/release/substrate-node --dev --unsafe-rpc-external
```

```bash
RUST_LOG="info,eth-rpc=debug" cargo run -p pallet-revive-eth-rpc --features example --example deploy
```

OR

```bash
RUST_LOG="info,eth-rpc=debug" target/release/eth-rpc
```
