module.exports = function (deployer) {
  deployer.deploy(artifacts.require('Migrations'));
  deployer.deploy(artifacts.require('Greeter'));
  deployer.deploy(artifacts.require('Coin'));
};
