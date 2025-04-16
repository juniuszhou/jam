#![no_main]
#![no_std]

// use alloc::collections::HashMap;
use uapi::{input, HostFn, HostFnImpl as api, StorageFlags};

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}
const KEY: &[u8] = b"selector ";
const PARAMETER: &[u8] = b"parameter ";

/// This is the constructor which is called once per contract.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    input!(selector: &[u8; 4], parameter: &[u8; 32],);

    api::set_storage(StorageFlags::empty(), KEY, &selector[..]);
    api::set_storage(StorageFlags::empty(), PARAMETER, &parameter[..]);
}
