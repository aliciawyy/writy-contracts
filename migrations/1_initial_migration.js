module.exports = function (deployer) {
  deployer.deploy(artifacts.require('./Migrations.sol'));
  deployer.deploy(artifacts.require('./Greeter.sol'));
};
