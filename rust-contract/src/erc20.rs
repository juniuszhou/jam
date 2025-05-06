#![no_main]
#![no_std]
extern crate alloc;
use alloc::vec;
use alloc::vec::Vec;

use simplealloc::SimpleAlloc;

#[global_allocator]
pub static mut GLOBAL: SimpleAlloc<{ 1024 * 10 }> = SimpleAlloc::new();

// use alloc::collections::HashMap;

// use alloy_core::primitives::Uint;
// use alloy::json_abi::JsonAbi;
// use alloy_core::primitives::U256;
// use ethabi_contract::use_contract;
use uapi::{input, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

use ethabi::{decode, encode, ethereum_types::U256, short_signature, ParamType, Token};
// use primitive_types::U256;

const NAME: &[u8] = b"name";
const SYMBOL: &[u8] = b"symbol";
const NAME_LENGTH: &[u8] = b"name_length";
const SYMBOL_LENGTH: &[u8] = b"symbol_length";

const DECIMALS: &[u8] = b"decimals";
const TOTAL_SUPPLY: &[u8] = b"total_supply";

const BALANCE: &[u8] = b"balance";
const ALLOWANCE: &[u8] = b"allowance";
// const ABI: &str = "[]";

// sol! {
//     function transfer(address recipient, uint256 amount);
// }

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

    // let abi = JsonAbi::from_slice(ABI.as_bytes()).unwrap();
    // abi.functions()
    //     .get_function("transfer")
    //     .unwrap()
    //     .selector()
    //     .to_vec();
    // abi.

    let length = api::call_data_size();
    let mut ptr: *mut u8;
    unsafe {
        ptr = GLOBAL.allocate(length as usize, 8);
        ptr.copy_from(data.as_ptr(), 100);
        let slice = core::slice::from_raw_parts(ptr, length as usize);
        api::set_storage(StorageFlags::empty(), DECIMALS, slice);
    }

    // let array: Vec<u8> = Vec::with_capacity(length as usize);

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

    let decimal_u64 = u64::from_be_bytes(data[88..96].try_into().unwrap());
    let total_supply_u64 = u64::from_be_bytes(data[120..128].try_into().unwrap());

    // let mut supply: U256 = U256::from_be_bytes(total_supply);

    let supply: u128 = 10u128.pow(decimal_u64 as u32) * total_supply_u64 as u128;

    // let supply = 0_u128;
    // hard code supply as zero since we can't get the sender of eth if deploy contract
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

    set_balance_u128(&sender, supply);
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

        // 0x313ce567 for decimals()
        &[49, 60, 229, 103] => api::return_value(ReturnFlags::empty(), &get_decimal()),

        // 0x18160ddd for totalSupply()
        &[24, 22, 13, 221] => api::return_value(ReturnFlags::empty(), &get_total_supply()),

        // 0x70a08231 for balanceOf(address)
        &[112, 160, 130, 49] => {
            input!(buffer: &[u8; 36],);
            let mut address = [0_u8; 20];
            address.copy_from_slice(&buffer[16..36]);
            let balance = get_balance_bytes(&address);
            let mut result = [0u8; 32];
            result[16..32].copy_from_slice(&balance[..]);
            api::return_value(ReturnFlags::empty(), &result[..]);
        }
        //allowance(address,address)
        // 0xdd62ed3e
        &[221, 98, 237, 62] => {
            input!(buffer: &[u8; 4 + 32 + 32],);
            // let a: usize = 12;

            let mut sender = [0_u8; 20];
            sender.copy_from_slice(&buffer[16..36]);

            let mut spender = [0_u8; 20];
            spender.copy_from_slice(&buffer[length as usize + 48..68]);

            let allowance = get_allownance_bytes(&sender, &spender);
            let mut result = [0_u8; 32];
            result[16..32].copy_from_slice(&allowance[..]);
            api::return_value(ReturnFlags::empty(), &result[..]);
        }
        //transfer(address,uint256)
        // 0xa9059cbb
        &[169, 5, 156, 187] => {
            input!(buffer: &[u8; 4 + 32 + 32],);
            let mut to_address = [0_u8; 20];
            to_address.copy_from_slice(&buffer[16..36]);

            let mut amount = [0_u8; 16];
            amount.copy_from_slice(&buffer[52..68]);

            let current_balance = get_balance_u128(&sender);
            let transfer_balance = u128::from_be_bytes(amount);

            if current_balance < transfer_balance {
                panic!("Insufficient balance");
            }

            let to_balance = get_balance_u128(&to_address);

            let balance_after_transfer = current_balance - transfer_balance;
            set_balance_u128(&sender, balance_after_transfer);

            let balance_after_transfer = to_balance + transfer_balance;
            set_balance_u128(&to_address, balance_after_transfer);
            api::return_value(ReturnFlags::empty(), &[0_u8; 32]);
        }
        // approve(address,uint256)
        // 0x095ea7b3
        &[9, 94, 167, 179] => {
            input!(buffer: &[u8; 4 + 32 + 32],);

            let mut spender = [0_u8; 20];
            spender.copy_from_slice(&buffer[16..36]);

            let mut amount = [0_u8; 16];
            amount.copy_from_slice(&buffer[52..68]);
            let approve_balance = u128::from_be_bytes(amount);

            let current_balance = get_balance_u128(&sender);
            if current_balance < approve_balance {
                panic!("Insufficient balance");
            }

            let balance_after_approve = current_balance - approve_balance;
            set_balance_u128(&sender, balance_after_approve);

            let current_allowance = get_allownance_u128(&sender, &spender);
            let allowance_after_approve = current_allowance + approve_balance;

            set_allownance_u128(&sender, &spender, allowance_after_approve);
            api::return_value(ReturnFlags::empty(), &[0_u8; 32]);
        }
        // transferFrom(address,address,uint256)
        // 0x23b872dd
        // address spender = _msgSender();
        // _spendAllowance(from, spender, value);
        // _transfer(from, to, value);
        &[35, 184, 114, 221] => {
            input!(buffer: &[u8; 4 + 32 + 32 + 32],);
            // I am spender
            let spender = sender;

            let mut from = [0_u8; 20];
            from.copy_from_slice(&buffer[16..36]);

            let mut recipient = [0_u8; 20];
            recipient.copy_from_slice(&buffer[48..68]);

            let mut amount = [0_u8; 16];
            amount.copy_from_slice(&buffer[84..100]);

            let current_allowance = get_allownance_u128(&from, &spender);
            let transfer_balance = u128::from_be_bytes(amount);
            if current_allowance < transfer_balance {
                panic!("Insufficient allowance");
            }
            let balance_after_transfer = current_allowance - transfer_balance;

            let recipient_balance = get_balance_u128(&recipient);
            let balance_after_recieve = recipient_balance + transfer_balance;

            // update balance and allowance
            set_balance_u128(&recipient, balance_after_recieve);
            set_allownance_u128(&from, &spender, balance_after_transfer);
            api::return_value(ReturnFlags::empty(), &[0_u8; 32]);
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
    let bytes = get_balance_bytes(sender);
    u128::from_be_bytes(bytes)
}

pub fn get_balance_bytes(sender: &[u8; 20]) -> [u8; 16] {
    let key = get_balance_key(sender);
    let mut balance = [0u8; 16];

    // let mut arr: Vec<u8> = Vec::new();
    let _ = api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]);
    return [0u8; 16];
}

pub fn set_balance_u128(sender: &[u8; 20], balance: u128) {
    let key = get_balance_key(sender);
    api::set_storage(StorageFlags::empty(), &key, &balance.to_be_bytes());
}

pub fn set_balance_bytes(sender: &[u8; 20], balance: &[u8; 16]) {
    let key = get_balance_key(sender);
    api::set_storage(StorageFlags::empty(), &key, &balance[..]);
}

pub fn get_allownance_key(sender: &[u8; 20], spender: &[u8; 20]) -> [u8; 49] {
    let mut key = [0u8; 49];
    key[0..9].copy_from_slice(ALLOWANCE);
    key[9..29].copy_from_slice(sender);
    key[29..49].copy_from_slice(spender);
    key
}

pub fn get_allownance_u128(sender: &[u8; 20], spender: &[u8; 20]) -> u128 {
    let balance = get_allownance_bytes(sender, spender);
    u128::from_be_bytes(balance)
}

pub fn get_allownance_bytes(sender: &[u8; 20], spender: &[u8; 20]) -> [u8; 16] {
    let key = get_allownance_key(sender, spender);
    let mut balance = [0u8; 16];
    let _ = api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]);
    balance
}

pub fn set_allownance_u128(sender: &[u8; 20], spender: &[u8; 20], allowance: u128) {
    let key = get_allownance_key(sender, spender);
    api::set_storage(StorageFlags::empty(), &key, &allowance.to_be_bytes());
}

pub fn get_allownance_bytes2(sender: &[u8; 20], spender: &[u8; 20], size: usize) -> [u8; 16] {
    let key = get_allownance_key(sender, spender);
    let mut balance = [0u8; 16];
    let mut arr: Vec<u8> = vec![0u8; size];
    arr.extend_from_slice(&balance);
    let _ = api::get_storage(StorageFlags::empty(), &key, &mut &mut arr[..]);
    // let mut b = [0u8; arr.len()];
    balance
}
