# nodes for try jam

## local nodes with revive

junius/polkadot-sdk-solochain-template revive branch

## official

polkadot-sdk/target/release/substrate-node

## build

```bash
cargo build --release
cargo build --bin substrate-node

cargo run -p pallet-revive-eth-rpc

cargo run -p staging-node-cli
```

## startup

```bash
RUST_LOG="evm=debug,sc_rpc_server=info,runtime::revive=debug" cargo run --bin substrate-node -- --dev --unsafe-rpc-external
```

OR

```bash
RUST_LOG="evm=debug,sc_rpc_server=info,runtime::revive=debug,polkavm=debug" target/release/substrate-node --dev --tmp --unsafe-rpc-external
```

```bash
RUST_LOG="info,eth-rpc=debug" cargo run -p pallet-revive-eth-rpc --features example --example deploy
```

OR

```bash
RUST_LOG="info,eth-rpc=debug" target/release/eth-rpc
```

## debug

log list:

runtime::revive

polkavm::api

polkavm::interpreter
