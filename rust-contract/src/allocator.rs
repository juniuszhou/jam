#![no_main]
#![no_std]
extern crate alloc;
use alloc::vec;
use alloc::vec::Vec;
use simplealloc::SimpleAlloc;
use uapi::{input, HostFn, HostFnImpl as api, ReturnFlags, StorageFlags};

#[panic_handler]
fn panic(_info: &core::panic::PanicInfo) -> ! {
    // Safety: The unimp instruction is guaranteed to trap
    unsafe {
        core::arch::asm!("unimp");
        core::hint::unreachable_unchecked();
    }
}

#[global_allocator]
pub static mut GLOBAL: SimpleAlloc<{ 1024 * 1024 }> = SimpleAlloc::new();

const NAME: &[u8] = b"name";

#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn deploy() {
    input!(data: &[u8; 256],);
    let a: Vec<u8> = vec![0; 256];

    let length = api::call_data_size();
    let ptr: *mut u8;
    unsafe {
        ptr = GLOBAL.allocate(length as usize, 8);
        ptr.copy_from(data.as_ptr(), 100);
        let slice = core::slice::from_raw_parts(ptr, length as usize);
        api::set_storage(StorageFlags::empty(), b"KEY", slice);
    }

    if length > 256 {
        panic!("Input data too long");
    }
}

/// This is the regular entry point when the contract is called.
#[no_mangle]
#[polkavm_derive::polkavm_export]
pub extern "C" fn call() {
    input!(selector: &[u8; 4],);
}
