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

const CALLER: &[u8] = b"caller";
const ORIGIN: &[u8] = b"origin";

/// This is the constructor which is called once per contract.
/// If you use the ss58 account to deploy the contract, the caller and origin will be the same.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    // input a uit256 and store it in the contract storage
    // input!(data: &[u8; 8],);
    let mut caller = [0u8; 32];
    let mut origin = [0u8; 32];

    let mut data = [0u8; 20];
    api::caller(&mut data);
    caller[12..32].copy_from_slice(&data[0..20]);
    api::origin(&mut data);
    origin[12..32].copy_from_slice(&data[0..20]);

    api::set_storage(StorageFlags::empty(), CALLER, &caller[..]);
    api::set_storage(StorageFlags::empty(), ORIGIN, &origin[..]);
}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    let mut caller = [0u8; 32];
    let mut origin = [0u8; 32];

    let mut data = [0u8; 20];
    api::caller(&mut data);
    caller[12..32].copy_from_slice(&data[0..20]);

    // origin is the address of the contract that called this contract
    api::origin(&mut data);
    origin[12..32].copy_from_slice(&data[0..20]);

    let mut result = [0u8; 32 * 4];
    let mut output = [0u8; 32];

    api::get_storage(StorageFlags::empty(), CALLER, &mut &mut output[..]).unwrap();
    result[0..32].copy_from_slice(&output[0..32]);
    api::get_storage(StorageFlags::empty(), ORIGIN, &mut &mut output[..]).unwrap();
    result[32..64].copy_from_slice(&output[0..32]);
    result[64..96].copy_from_slice(&caller[0..32]);
    result[96..128].copy_from_slice(&origin[0..32]);

    // returning without calling this function leaves the output buffer empty
    api::return_value(ReturnFlags::empty(), &result);
}
