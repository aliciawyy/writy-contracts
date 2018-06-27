var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

var Greeter = artifacts.require("../contacts/Greeter.sol");

module.exports = function(deployer) {
  deployer.deploy(Greeter);
};