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

  it("only owner can mint one address", async () => {
    let receiver = accounts[1];
    let amount = 1000;

    let instance = await Coin.deployed({ 'from': owner });
    await instance.mint(receiver, amount, { 'from': owner });
    let balance = await instance.balances.call(receiver);
    assert.equal(balance.valueOf(), amount);

    await instance.mint(accounts[2], amount, { 'from': receiver });
    let balance2 = await instance.balances.call(accounts[2]);
    assert.equal(balance2.valueOf(), 0);
  });
});
