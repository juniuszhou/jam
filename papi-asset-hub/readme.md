# 

## 

npx papi add hub -w wss://westend-asset-hub-rpc.polkadot.io

npx papi add local -w http://127.0.0.1:9944

deno install npm:polkadot-api

deno run --allow-all npm:polkadot-api
