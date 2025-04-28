#![no_main]
#![no_std]
extern crate alloc;
use alloc::vec;
use alloc::vec::Vec;

use simplealloc::SimpleAlloc;

#[global_allocator]
pub static mut GLOBAL: SimpleAlloc<{ 1024 * 1024 * 10 }> = SimpleAlloc::new();

use uapi::{input, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

use ethabi::{decode, encode, ethereum_types::U256, short_signature, ParamType, Token};
// use primitive_types::U256;

const NAME: &[u8] = b"name";
const SYMBOL: &[u8] = b"symbol";
const NAME_LENGTH: &[u8] = b"name_length";
const SYMBOL_LENGTH: &[u8] = b"symbol_length";

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    input!(data: &[u8; 256],);
    let a: Vec<u8> = Vec::new();

    let param_types = &[
        ParamType::String,
        ParamType::String, // recipient address
        ParamType::Uint(256),
        ParamType::Uint(256), // amount
    ];

    let decode_result = decode(param_types, &data[..]).unwrap();

    if let (
        Token::String(name),
        Token::String(symbol),
        Token::Uint(decimals),
        Token::Uint(total_supply),
    ) = (
        &decode_result[0],
        &decode_result[1],
        &decode_result[2],
        &decode_result[3],
    ) {
        // let mut tmp = String::from_utf8_lossy(name);

        // let mut arr: Vec<u8> = Vec::new();
        // arr.extend_from_slice(&[0u8; 32]);
        // tmp.
        api::set_storage(StorageFlags::empty(), NAME, &name.as_bytes()[..]);
        api::set_storage(StorageFlags::empty(), SYMBOL, &symbol.as_bytes()[..]);
        // let [one, two, three, four] = decimals.pow();
        let total_supply = U256::from(10u64)
            .pow(*decimals)
            .saturating_mul(*total_supply);

        // println!("name: {}, symbol: {}", name, symbol);
    } else {
        panic!("Failed to decode input data");
    }

    let length = api::call_data_size();

    // let array: Vec<u8> = Vec::with_capacity(length as usize);

    // let a = [0_u8; length];

    if length > 256 {
        panic!("Input data too long");
    }
}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    input!(selector: &[u8; 4],);
    let length = api::call_data_size();
    if length > 256 {
        panic!("Input data too long");
    }
    let mut sender = [0_u8; 20];
    api::origin(&mut sender);

    // let name_selector = short_signature("name", &[]);
    // let symbol_selector = short_signature("symbol", &[]);
    // let decimals_selector = short_signature("decimals", &[]);
    // let total_supply_selector = short_signature("totalSupply", &[]);
    // let balance_of_selector = short_signature("balanceOf", &[ParamType::Address]);
    // let transfer_selector =
    //     short_signature("transfer", &[ParamType::Address, ParamType::Uint(256)]);
    // let approve_selector = short_signature("approve", &[ParamType::Address, ParamType::Uint(256)]);
    // let allowance_selector =
    //     short_signature("allowance", &[ParamType::Address, ParamType::Address]);
    // let transfer_from_selector = short_signature(
    //     "transferFrom",
    //     &[ParamType::Address, ParamType::Address, ParamType::Uint(256)],
    // );

    match selector {
        // 0x06fdde03 selector for name()
        &[6, 253, 222, 3] => api::return_value(ReturnFlags::empty(), &get_name()),

        // 0x95d89b41 selector for symbol()
        &[149, 216, 155, 65] => api::return_value(ReturnFlags::empty(), &get_symbol()),

        _ => panic!("Unknown function"),
    }
}

pub fn get_name() -> [u8; 96] {
    let mut name = [0u8; 96];
    api::get_storage(uapi::StorageFlags::empty(), NAME, &mut &mut name[..]).unwrap();
    name
}

pub fn get_symbol() -> [u8; 96] {
    let mut symbol = [0u8; 96];
    api::get_storage(uapi::StorageFlags::empty(), SYMBOL, &mut &mut symbol[..]).unwrap();
    symbol
}
