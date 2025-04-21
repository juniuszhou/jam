#![no_main]
#![no_std]

// use alloc::collections::HashMap;
use uapi::{input, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

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

    // let a = [0_u8; length];

    if length > 256 {
        panic!("Input data too long");
    }

    let mut sender = [0_u8; 20];
    api::caller(&mut sender);

    let mut decimals = [0u8; 32];
    let mut total_supply = [0u8; 32];

    decimals.copy_from_slice(&data[64..96]);
    total_supply.copy_from_slice(&data[96..128]);

    // let decimal_u64 = u64::from_be_bytes(data[88..96].try_into().unwrap());
    // let total_supply_u64 = u64::from_be_bytes(data[120..128].try_into().unwrap());

    // let supply: u128 = 10u128.pow(decimal_u64 as u32) * total_supply_u64 as u128;

    // let supply = 0_u128;
    // hard code supply as zero since we can't get the sender of eth if deploy contract
    let total_supply = [0u8; 32];
    // total_supply[16..32].copy_from_slice(&supply.to_be_bytes());

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
    let mut sender = [0_u8; 20];
    api::origin(&mut sender);

    match selector {
        // 0x06fdde03 selector for name()
        &[6, 253, 222, 3] => api::return_value(ReturnFlags::empty(), &get_name()),

        // 0x95d89b41 selector for symbol()
        &[149, 216, 155, 65] => api::return_value(ReturnFlags::empty(), &get_symbol()),

        // 0x313ce567 for decimals()
        &[49, 60, 229, 103] => api::return_value(ReturnFlags::empty(), &get_decimal()),

        // 0x18160ddd for totalSupply()
        &[24, 22, 13, 221] => api::return_value(ReturnFlags::empty(), &get_total_supply()),

        // 0x70a08231 for balanceOf(address)
        &[112, 160, 130, 49] => {
            // input!(
            //     512,
            //     callee_addr: &[u8; 20],
            //     value: u64,
            //     callee_input: [u8],
            // );

            input!(buffer: &[u8; 36],);
            let mut address = [0_u8; 20];
            // api::call_data_copy(&mut address, 0);
            address.copy_from_slice(&buffer[16..36]);
            // let balance = get_balance(&address);
            let mut balance = [0_u8; 32];
            balance[12..32].copy_from_slice(&sender[..]);
            // let balance = 123_456_789_012_345_678_901_234_567_890_u128;
            // let mut result = [0_u8; 32];
            // result[16..32].copy_from_slice(&balance.to_be_bytes());
            api::return_value(ReturnFlags::empty(), &balance[..]);
        }
        // mint(uint256)
        // 0x40c10f19 for mint(address,uint256,bytes)
        // 0xa0712d68 for mint(uint256)
        &[160, 177, 45, 104] => {
            input!(buffer: &[u8; 36],);
            let mut address = [0_u8; 20];
            api::origin(&mut address);

            let mut amount = [0_u8; 32];
            amount.copy_from_slice(&buffer[4..36]);

            let mut data = [0_u8; 32];
            data.copy_from_slice(&buffer[56..88]);
            // let balance = get_balance(&address);
            // let mut balance = [0_u8; 32];
            // balance.copy_from_slice(&buffer[4..36]);
            // let balance = 123_456_789_012_345_678_901_234_567_890_u128;
            // let mut result = [0_u8; 32];
            // result[16..32].copy_from_slice(&balance.to_be_bytes());
            api::return_value(ReturnFlags::empty(), &data[..]);
        }
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

pub fn get_balance_key(sender: &[u8; 20]) -> [u8; 27] {
    let mut key = [0u8; 27];
    key[0..7].copy_from_slice(BALANCE);
    key[7..27].copy_from_slice(sender);
    key
}

pub fn get_balance_u128(sender: &[u8; 20]) -> u128 {
    let key = get_balance_key(sender);
    let mut balance = [0u8; 32];
    let result = api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]);
    match result {
        Ok(_) => {
            let mut data = [0u8; 16];
            data.copy_from_slice(&balance[16..32]);
            u128::from_be_bytes(data)
        }
        Err(_) => 0,
    }
}

pub fn get_balance(sender: &[u8; 20]) -> [u8; 32] {
    let key = get_balance_key(sender);
    let mut balance = [0u8; 32];
    api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]).unwrap();
    return balance;
}

pub fn set_balance(sender: &[u8; 20], balance: u128) {
    let key = get_balance_key(sender);
    let mut data = [0u8; 32];
    data[16..32].copy_from_slice(&balance.to_be_bytes());
    // never unwrap for set_storage
    api::set_storage(StorageFlags::empty(), &key, &data[..]);
}

pub fn set_balance_bytes(sender: &[u8; 20], balance: &[u8; 32]) {
    let key = get_balance_key(sender);
    // let mut data = [0u8; 32];
    // data[16..32].copy_from_slice(&balance.to_be_bytes());
    // never unwrap for set_storage
    api::set_storage(StorageFlags::empty(), &key, &balance[..]);
}

pub fn get_allownance_key(sender: &[u8; 20], spender: &[u8; 20]) -> [u8; 49] {
    let mut key = [0u8; 49];
    key[0..9].copy_from_slice(ALLOWANCE);
    key[9..29].copy_from_slice(sender);
    key[29..49].copy_from_slice(spender);
    key
}

pub fn get_allownance(sender: &[u8; 20], spender: &[u8; 20]) -> u128 {
    let key = get_allownance_key(sender, spender);
    let mut balance = [0u8; 32];
    let result = api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]);
    match result {
        Ok(_) => {
            let mut data = [0u8; 16];
            data.copy_from_slice(&balance[16..32]);
            u128::from_be_bytes(data)
        }
        Err(_) => 0,
    }
}

pub fn set_allownance(sender: &[u8; 20], spender: &[u8; 20]) {
    let key = get_allownance_key(sender, spender);
    let mut data = [0u8; 32];
    data[16..32].copy_from_slice(&0u128.to_be_bytes());
    api::set_storage(StorageFlags::empty(), &key, &data[..]).unwrap();
}
