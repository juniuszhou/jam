#![no_main]
#![no_std]

use uapi::{input, HostFn, HostFnImpl as api, ReturnFlags};

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
    // let data: u128 = Default::default();
    input!(data: &[u8; 32],);
    let value = u32::from_be_bytes(data[28..].try_into().unwrap());
    let double = value * 2;

    let mut output = [0u8; 32];
    output[28..].copy_from_slice(&double.to_be_bytes());

    // returning without calling this function leaves the output buffer empty
    api::return_value(ReturnFlags::empty(), &output);
}
