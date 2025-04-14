#![no_main]
#![no_std]

// use alloc::collections::HashMap;
use uapi::{input, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

const KEY: &[u8] = b"constructor ";

/// This is the constructor which is called once per contract.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    // input a uit256 and store it in the contract storage
    input!(data: &[u8; 8],);
    // Read the contract address. do we know it at this point?
    // it is empty now and will be filled in the deploy function
    // let mut addr = [0u8; 20];
    // api::address(&mut addr);

    // let mut key = [0u8; 32];
    // key[0..20].copy_from_slice(&addr);
    // key[20..].copy_from_slice(KEY);

    api::set_storage(StorageFlags::empty(), KEY, &data[..]);
}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    // const KEY: &[u8] = b"constructor ";

    // Read the contract address.
    // let mut addr = [0u8; 20];
    // api::address(&mut addr);

    // let mut key = [0u8; 32];
    // key[0..20].copy_from_slice(&addr);
    // key[20..].copy_from_slice(KEY);

    let mut output = [0u8; 8];

    api::get_storage(StorageFlags::empty(), KEY, &mut &mut output[..]).unwrap();

    // returning without calling this function leaves the output buffer empty
    api::return_value(ReturnFlags::empty(), &output);
}
