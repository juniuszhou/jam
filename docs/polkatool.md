# polkatool

## install

## attention to the vervison. polkavm couldn't execute if compile with different version.

```bash
cargo install polkatool
```

## convert evm bytecode to polkavm code. hex to binary.

```bash
xxd -r -p bytecode.txt code.polkavm
```

## disassemble polkavm code

```bash
polkatool disassemble contract.polkavm
```

## get the target json file

```bash
polkatool get-target-json-path
```

/home/user/.cache/.polkavm-linker/0.19.0/riscv32emac-unknown-none-polkavm.json
