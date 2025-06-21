const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");



module.exports = buildModule("NFTModule", (m) => {
  const gasOpts = { gasPrice: 1_000_000_000 };
  const nft = m.contract("CoreNFT", ["https://Amir0uch.github.io/nft-collection/generated_metadata/"]);
  
  return { nft };
});
