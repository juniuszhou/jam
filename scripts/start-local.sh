pkill substrate-node
pkill eth-rpc
rm local-logs/node.log
rm local-logs/rpc.log
/home/user/github/polkadot-sdk/target/release/substrate-node --dev --tmp --unsafe-rpc-external &>local-logs/node.log &
sleep 1
/home/user/github/polkadot-sdk/target/release/eth-rpc &>local-logs/rpc.log &
