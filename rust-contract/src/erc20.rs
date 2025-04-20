#![no_main]
#![no_std]

// use alloc::collections::HashMap;
use uapi::{input, output, u64_output, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

const NAME: &[u8] = b"name";
const SYMBOL: &[u8] = b"symbol";
const DECIMALS: &[u8] = b"decimals";
const TOTAL_SUPPLY: &[u8] = b"total_supply";

const BALANCE: &[u8] = b"balance";
const ALLOWANCE: &[u8] = b"allowance";

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

/// This is the constructor which is called once per contract.
/// the input data like this: name, symbol, decimals, total_supply
// Chunk 1: 0000000000000000000000000000000000000000000000000000000000000080
// Chunk 2: 00000000000000000000000000000000000000000000000000000000000000c0
// Chunk 3: 000000000000000000000000000000000000000000000000000462d537e7ef4e
// Chunk 4: 000000000000000000000000000000000000000000000000000462d537e7ef4e
// Chunk 5: 0000000000000000000000000000000000000000000000000000000000000010
// Chunk 6: 3132333435363738616263646566676800000000000000000000000000000000
// Chunk 7: 0000000000000000000000000000000000000000000000000000000000000010
// Chunk 8: 3132333435363738616263646566676800000000000000000000000000000000
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    input!(data: &[u8; 256],);
    let length = api::call_data_size();
    if length > 256 {
        panic!("Input data too long");
    }

    let mut decimals = [0u8; 32];
    let mut total_supply = [0u8; 32];

    decimals.copy_from_slice(&data[64..96]);
    total_supply.copy_from_slice(&data[96..128]);

    let decimal_u64 = u64::from_be_bytes(data[88..96].try_into().unwrap());
    let total_supply_u64 = u64::from_be_bytes(data[120..128].try_into().unwrap());

    let supply: u128 = 10u128.pow(decimal_u64 as u32) * total_supply_u64 as u128;
    let mut total_supply = [0u8; 32];
    total_supply[16..32].copy_from_slice(&supply.to_be_bytes());

    let mut string_storage = [0u8; 96];
    string_storage[31] = 0x20;
    string_storage[32..96].copy_from_slice(&data[128..128 + 64]);

    // 32 length and 32 data
    api::set_storage(StorageFlags::empty(), NAME, &string_storage[..]);

    string_storage[32..96].copy_from_slice(&data[192..192 + 64]);
    api::set_storage(StorageFlags::empty(), SYMBOL, &string_storage[..]);

    // // 16 for decimal
    api::set_storage(StorageFlags::empty(), DECIMALS, &data[64..96]);
    // // 16 for total_supply
    api::set_storage(StorageFlags::empty(), TOTAL_SUPPLY, &total_supply[..]);
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
    match selector {
        // 0x06fdde03 selector for name()
        &[6, 253, 222, 3] => api::return_value(ReturnFlags::empty(), &get_name()),

        // 0x95d89b41 selector for symbol()
        &[149, 216, 155, 65] => api::return_value(ReturnFlags::empty(), &get_symbol()),

        // 0x313ce567 for decimals()
        &[49, 60, 229, 103] => api::return_value(ReturnFlags::empty(), &get_decimal()),

        // 0x18160ddd for totalSupply()
        &[24, 22, 13, 221] => api::return_value(ReturnFlags::empty(), &get_total_supply()),
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

pub fn get_decimal() -> [u8; 32] {
    let mut decimal = [0u8; 32];
    api::get_storage(uapi::StorageFlags::empty(), DECIMALS, &mut &mut decimal[..]).unwrap();
    decimal
}

pub fn get_total_supply() -> [u8; 32] {
    let mut supply = [0u8; 32];
    api::get_storage(
        uapi::StorageFlags::empty(),
        TOTAL_SUPPLY,
        &mut &mut supply[..],
    )
    .unwrap();
    supply
}
