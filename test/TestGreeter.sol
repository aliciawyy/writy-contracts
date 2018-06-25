pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "../contracts/Greeter.sol";

contract TestGreeter {
    function test_setGreeter() public {
        Greeter greeter = new Greeter();
        Assert.equal(greeter.greeting(), "Hello", "");

        greeter.setGreeting("Bonjour");
        Assert.equal(greeter.greeting(), "Bonjour", "");
    }
}

