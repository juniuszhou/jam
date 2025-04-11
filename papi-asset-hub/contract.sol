// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.2 <0.9.0;

contract GetDouble {
    uint256 public double;
    bytes public result;

    function getDouble(uint256 input) public {
        // address of double contract in rust
        address precompile = address(0x56C74e7e1590Ec09D0ad70D6ba5FDC4480991503);
        // result
        bool success;
        bytes memory resultInMemory;
        // just all it without selector
        (success, resultInMemory) = precompile.call{value: 0}(abi.encode(input));
        
        // put result in storage
        result = resultInMemory;
        double = abi.decode(resultInMemory, (uint256));
    }
}


