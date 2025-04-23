pkill substrate-node
pkill eth-rpc
rm local-logs/node.log
rm local-logs/rpc.log
RUST_LOG="evm=debug,sc_rpc_server=info,runtime::revive=debug,polkavm=debug" /home/user/github/polkadot-sdk/target/release/substrate-node --dev --tmp --unsafe-rpc-external &>local-logs/node.log &
/home/user/github/polkadot-sdk/target/release/eth-rpc &>local-logs/rpc.log &
