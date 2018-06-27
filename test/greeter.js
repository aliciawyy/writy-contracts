var Greeter = artifacts.require('Greeter');

contract('Greeter', function () {
  it('greeting with name', function () {
    return Greeter.deployed().then(function (instance) {
      return instance.greeting('World');
    }).then(function (greetingWords) {
      assert.equal(greetingWords, 'Hello World', '');
    });
  });
});
