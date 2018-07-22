var OkonomiToken = artifacts.require("../contracts/OkonomiToken.sol");
var Okonomi = artifacts.require("../contracts/Okonomi.sol");
  
module.exports = function(deployer) {
  deployer.deploy(OkonomiToken);
  deployer.deploy(Okonomi);
};
