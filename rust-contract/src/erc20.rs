#![no_main]
#![no_std]

// use alloc::collections::HashMap;
use uapi::{input, output, u64_output, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

const NAME: &[u8] = b"name";
const SYMBOL: &[u8] = b"symbol";
const DECIMALS: &[u8] = b"decimals";
const TOTAL_SUPPLY: &[u8] = b"total_supply";

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

    let supply: u128 = decimal_u64 as u128 * total_supply_u64 as u128;
    let mut total_supply = [0u8; 16];
    total_supply[0..16].copy_from_slice(&supply.to_be_bytes());

    // 32 length and 32 data
    api::set_storage(StorageFlags::empty(), NAME, &data[128..128 + 64]);
    api::set_storage(StorageFlags::empty(), SYMBOL, &data[192..192 + 64]);

    // // 16 for decimal
    api::set_storage(StorageFlags::empty(), DECIMALS, &data[80..96]);
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

    let result = match selector {
        // 0x06fdde03 selector for name()
        &[6, 253, 222, 3] => get_name(),
        _ => panic!("Unknown function"),
    };

    // returning without calling this function leaves the output buffer empty
    api::return_value(ReturnFlags::empty(), &result);
}

pub fn get_name() -> [u8; 64] {
    let mut name = [0u8; 64];
    api::get_storage(uapi::StorageFlags::empty(), NAME, &mut &mut name[..]).unwrap();
    name
}
