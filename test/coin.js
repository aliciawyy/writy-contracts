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
});
