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



contract StoreData {
    function getDouble(uint256 input) public {
        // address of double contract in rust
        address precompile = address(0x3db4240fe62e79f3cb6f6f0eb4df027a71a727c0);
        // result
        bool success;
        // bytes memory resultInMemory;
        // just all it without selector
        (success, _) = precompile.call{value: 0}(abi.encode(input));
        
        // put result in storage
        // result = resultInMemory;
        // double = abi.decode(resultInMemory, (uint256));
        
    }
}

// test immutable contract
contract getImmutable {
    bytes public value;

    function getValue() public returns (uint256) {
        address precompile = address(0xF010f33e5749cF5471f2c44F33935F7679Fbd71F);

        bool success;
        bytes memory resultInMemory;
        // just all it without selector
        (success, resultInMemory) = precompile.call{value: 0}(abi.encode(""));
        value = resultInMemory;
        uint256 result = abi.decode(resultInMemory, (uint256));
        return result;
    }
}

contract getConstructor {
    bytes public data;
    function getValue() public {
        address precompile = address(0x1eff8A3DFd95398768e909877eaA48bFe47961FC);

        bool success;
        bytes memory resultInMemory;
        // just all it without selector
        (success, resultInMemory) = precompile.call{value: 0}(abi.encode(""));
        data = resultInMemory;
    }
}



contract getSelector {
    bytes public data;
    function getValue() public {
        address precompile = address(0xC2cd43e189ea3F48f43c568582eB78bb14dD9B11);

        bool success;
        bytes memory resultInMemory;
        // just all it without selector
        (success, resultInMemory) = precompile.call{value: 0}(abi.encode(""));
        data = resultInMemory;
    }
}

contract getERC20 {
    bytes public data;
    function getValue() public {
        address precompile = address(0x67CfaB4f62Ea0494eBaf61c851d892e6C9C8EeE9);

        bool success;
        bytes memory resultInMemory;
        //select name
        bytes memory input = hex"06fdde03";
        // just all it without selector
        (success, resultInMemory) = precompile.call{value: 0}(input);
        data = resultInMemory;
    }
}
