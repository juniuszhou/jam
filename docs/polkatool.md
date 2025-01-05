# polkatool

## install

```bash
cargo install polkatool
```

## convert evm bytecode to polkavm code

```bash
xxd -r -p bytecode.txt code.polkavm
```

## disassemble polkavm code

```bash
polkatool disassemble code.polkavm
```
