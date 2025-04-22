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

    let decimal_u64 = u64::from_be_bytes(data[88..96].try_into().unwrap());
    let total_supply_u64 = u64::from_be_bytes(data[120..128].try_into().unwrap());

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
            api::return_value(ReturnFlags::empty(), &balance[..]);
        }
        //allowance(address,address)
        // 0xdd62ed3e
        &[221, 98, 237, 62] => {
            input!(buffer: &[u8; 4 + 32 + 32],);

            let mut sender = [0_u8; 20];
            sender.copy_from_slice(&buffer[16..36]);

            let mut spender = [0_u8; 20];
            spender.copy_from_slice(&buffer[48..68]);

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
        }
        // approve(address,uint256)
        // 0x095ea7b3
        &[9, 94, 167, 179] => {
            input!(buffer: &[u8; 4 + 32 + 32],);

            let mut address = [0_u8; 20];
            address.copy_from_slice(&buffer[16..36]);

            let mut amount = [0_u8; 16];
            amount.copy_from_slice(&buffer[52..68]);
            let approve_balance = u128::from_be_bytes(amount);

            let current_balance = get_balance_u128(&sender);
            if current_balance < approve_balance {
                panic!("Insufficient balance");
            }

            let balance_after_approve = current_balance - approve_balance;
            set_balance_u128(&sender, balance_after_approve);

            let current_allowance = get_allownance_u128(&sender, &address);
            let allowance_after_approve = current_allowance + approve_balance;
            set_allownance(&sender, &address, allowance_after_approve);

            let mut data = [0_u8; 32];
            data.copy_from_slice(&buffer[68..100]);
            api::return_value(ReturnFlags::empty(), &data[..]);
        }
        // transferFrom(address,address,uint256)
        // 0x23b872dd
        &[35, 184, 114, 221] => {
            input!(buffer: &[u8; 36],);
            let mut address = [0_u8; 20];
            address.copy_from_slice(&buffer[16..36]);
            let mut amount = [0_u8; 32];
            amount.copy_from_slice(&buffer[36..68]);
            let mut data = [0_u8; 32];
            data.copy_from_slice(&buffer[68..100]);
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

pub fn get_balance_bytes(sender: &[u8; 20]) -> [u8; 16] {
    let key = get_balance_key(sender);
    let mut balance = [0u8; 32];
    api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]).unwrap();
    return balance;
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
    api::get_storage(StorageFlags::empty(), &key, &mut &mut balance[..]).unwrap();
    balance
}

pub fn set_allownance(sender: &[u8; 20], spender: &[u8; 20], allowance: u128) {
    let key = get_allownance_key(sender, spender);
    api::set_storage(StorageFlags::empty(), &key, &allowance.to_be_bytes()).unwrap();
}
