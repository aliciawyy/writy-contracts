pragma solidity ^0.4.22;


contract Greeter {
  string public greeting;

  constructor() public {
    greeting = "Hello";
  }

  function setGreeting(string _greeting) public {
    greeting = _greeting;
  }

  function greeting(bytes name) public view returns (bytes) {
    bytes memory byteGreeting = bytes(greeting);
    bytes memory namedGreeting = new bytes(
      byteGreeting.length + 1 + name.length
    );
    uint i;

    for (i = 0; i < byteGreeting.length; i++) {
      namedGreeting[i] = byteGreeting[i];
    }

    namedGreeting[byteGreeting.length] = " ";

    for (i = 0; i < name.length; i++) {
      namedGreeting[byteGreeting.length + 1 + i] = name[i];
    }

    return namedGreeting;
  }
}
