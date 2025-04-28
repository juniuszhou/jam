#![no_main]
#![no_std]
extern crate alloc;
use alloc::vec;
use alloc::vec::Vec;

use simplealloc::SimpleAlloc;

#[global_allocator]
pub static mut GLOBAL: SimpleAlloc<{ 1024 * 10 }> = SimpleAlloc::new();

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
        Token::Uint(_total_supply),
    ) = (
        &decode_result[0],
        &decode_result[1],
        &decode_result[2],
        &decode_result[3],
    ) {
        // api::set_storage(StorageFlags::empty(), NAME, &name.as_bytes());
        set_name(name.len() as u16, &name.as_bytes());
        // api::set_storage(StorageFlags::empty(), SYMBOL, &symbol.as_bytes()[..]);
    } else {
        panic!("Failed to decode input data");
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
        &[6, 253, 222, 3] => api::return_value(ReturnFlags::empty(), &get_name()[..]),

        // 0x95d89b41 selector for symbol()
        &[149, 216, 155, 65] => api::return_value(ReturnFlags::empty(), &get_symbol()[..]),

        _ => panic!("Unknown function"),
    }
}

pub fn set_name(length: u16, data: &[u8]) {
    let mut name_length = [0u8; 2];
    name_length.copy_from_slice(&length.to_be_bytes()[..]);
    let _ = api::set_storage(
        uapi::StorageFlags::empty(),
        NAME_LENGTH,
        &mut &mut name_length[..],
    );

    api::set_storage(uapi::StorageFlags::empty(), NAME, &data[..]);
}

pub fn set_symbol(length: u16, data: &[u8]) {
    let mut symbol_length = [0u8; 2];
    symbol_length.copy_from_slice(&length.to_be_bytes()[..]);
    let _ = api::set_storage(
        uapi::StorageFlags::empty(),
        SYMBOL_LENGTH,
        &mut &mut symbol_length[..],
    );

    api::set_storage(uapi::StorageFlags::empty(), SYMBOL, &data[..]);
}

pub fn get_name() -> Vec<u8> {
    let mut name_length = [0u8; 2];
    let _ = api::get_storage(
        uapi::StorageFlags::empty(),
        NAME_LENGTH,
        &mut &mut name_length[..],
    );
    let name_length = u16::from_be_bytes(name_length);
    let mut name = vec![0u8; name_length as usize];

    let _ = api::get_storage(uapi::StorageFlags::empty(), NAME, &mut &mut name[..]);
    let result_length = if name_length % 32 == 0 {
        name_length + 64
    } else {
        (name_length / 32 + 1) * 32 + 64
    };

    let mut result = vec![0u8; result_length as usize];
    // // set index of string length
    result[31] = 0x20;
    result[62..64].copy_from_slice(&name_length.to_be_bytes()[..]);
    result[64..(64 + name_length as usize)].copy_from_slice(&name[..]);
    result
}

pub fn get_symbol() -> Vec<u8> {
    let mut symbol_length = [0u8; 2];
    let _ = api::get_storage(
        uapi::StorageFlags::empty(),
        SYMBOL_LENGTH,
        &mut &mut symbol_length[..],
    );
    let symbol_length = u16::from_be_bytes(symbol_length);
    let mut symbol = vec![0u8; symbol_length as usize];

    let _ = api::get_storage(uapi::StorageFlags::empty(), SYMBOL, &mut &mut symbol[..]);
    let result_length = if symbol_length % 32 == 0 {
        symbol_length + 64
    } else {
        (symbol_length / 32 + 1) * 32 + 64
    };

    let mut result = vec![0u8; result_length as usize];
    // set index of string length
    result[31] = 0x20;
    result[63..64].copy_from_slice(&symbol_length.to_be_bytes()[..]);
    result[64..(64 + symbol_length as usize)].copy_from_slice(&symbol[..]);
    result
}

pub fn get_name_2() -> [u8; 96] {
    let mut result = [0u8; 96];
    // api::get_storage(uapi::StorageFlags::empty(), NAME, &mut &mut name[..]).unwrap();
    result[31] = 0x20;
    result[63] = 0x01;
    result[64] = 0x61;
    result
}
