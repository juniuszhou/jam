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

/// This is the constructor which is called once per contract.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    // pad with length of 12 bytes, hex 73746f726167652020202020
    // the key will be contract address + 12 bytes of storage name
    // the real key in the rocksdb will be the hash of it.
    // no necessary to hash it or use the fixed length key.
    const KEY: &[u8] = b"storage     ";
    input!(data: &[u8; 32],);

    // Read the contract address.
    let mut addr = [0u8; 20];
    api::address(&mut addr);

    let mut key = [0u8; 32];
    key[0..20].copy_from_slice(&addr);
    key[20..].copy_from_slice(KEY);

    api::set_storage(StorageFlags::empty(), &key, &data[..]);
}
