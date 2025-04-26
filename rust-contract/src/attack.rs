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

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    for i in 0..2048 {
        let mut buf = [0; 32];
        buf[0..4].copy_from_slice(&(i as u32).to_be_bytes());
        api::set_storage(StorageFlags::empty(), &buf, &buf);
    }
}

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {}
