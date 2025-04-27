#![no_main]
#![no_std]
// extern crate alloc;
// use alloc::vec::Vec;

// use alloc::collections::HashMap;
use uapi::{HostFn, HostFnImpl as api, StorageFlags};

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
    // let mut buf = [0; 32];
    // let mut array: Vec<u8> = Vec::with_capacity(25);
    // array.push(0);
}

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    for i in 0..2560 {
        let mut buf = [0; 32];
        buf[0..4].copy_from_slice(&(i as u32).to_be_bytes());
        api::set_storage(StorageFlags::empty(), &buf, &buf);
    }
}
