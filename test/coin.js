var Coin = artifacts.require('Coin');

contract('Coin', function (accounts) {
  var owner = accounts[0];

  it('minter address is owner', function () {
    return Coin.deployed({ 'from': owner }).then(function (instance) {
      return instance.minter.call();
    }).then(function (minter) {
      assert.equal(minter, owner);
    });
  });

  it('only owner can mint one address', async () => {
    let receiver = accounts[1];
    let amount = 1000;

    let instance = await Coin.deployed({ 'from': owner });
    await instance.mint(receiver, amount, { 'from': owner });
    let balance = await instance.balances(receiver);
    assert.equal(balance, amount);

    await instance.mint(accounts[2], amount, { 'from': receiver });
    let balanceWhenMinterIsNotOwner = await instance.balances(accounts[2]);
    assert.equal(balanceWhenMinterIsNotOwner, 0);
  });

  it('user can send coins to others', async () => {
    let from = accounts[2];
    let to = accounts[3];
    let amount = 100;

    let instance = await Coin.deployed({ 'from': owner });
    await instance.sendCoin(to, amount, { 'from': from });
    let balanceReceiver = await instance.balances(to);
    assert.equal(balanceReceiver, 0);

    await instance.mint(from, 1000, { 'from': owner });
    let balanceSender = await instance.balances(from);
    assert.equal(balanceSender, 1000);

    await instance.sendCoin(to, amount, { 'from': from });
    balanceReceiver = await instance.balances(to);
    assert.equal(balanceReceiver, amount);
  });
});
