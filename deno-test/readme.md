# interact with chain based on deno

## install deno

curl -fsSL https://deno.land/install.sh | sh

## install dependency

deno install

## run task

deno run deploy

## get metadata

need a package.json file for polkadot-api to check and write record, but need
manual copy to deno.json

```bash
deno run --allow-all npm:polkadot-api add hub -w wss://westend-asset-hub-rpc.polkadot.io
deno run --allow-all npm:polkadot-api add local -w http://127.0.0.1:9944
```
