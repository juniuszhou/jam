# install resolc

## clone revive repo

## cd revive then run.

make install-llvm
export LLVM_SYS_181_PREFIX=${PWD}/target-llvm/gnu/target-final
make install-bin

resolc

user@user-X870-EAGLE-WIFI7:~/github/paritytech/revive$ which resolc
/home/user/.cargo/bin/resolc
