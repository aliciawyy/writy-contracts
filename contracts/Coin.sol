pragma solidity ^0.4.22;


contract Coin {
  address public minter;
  mapping (address => uint) public balances;

  constructor() public {
    minter = msg.sender;
  }

  function mint(address receiver, uint amount) public {
    if (msg.sender == minter) {
      balances[receiver] += amount;
    }
  }

  event Sent(address from, address to, uint amount);

  function sendCoin(address receiver, uint amount) public {
    if (balances[msg.sender] < amount) {
      return;
    }
    balances[msg.sender] -= amount;
    balances[receiver] += amount;
    emit Sent(msg.sender, receiver, amount);
  }
}
