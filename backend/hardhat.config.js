require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("dotenv").config();

function privateKey() {
  return process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network",
      chainId: 1115,
      accounts: privateKey(),
    },
  },
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "paris",
      optimizer: { enabled: true, runs: 1000 },
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,       // your CoreScan API key (set in .env)
    customChains: [
      {
        network: "core_testnet",       // must match your Hardhat network name
        chainId: 1115,
        urls: {
          // The Base URL for explorer API calls
          apiURL: "https://api.test.btcs.network/api",
          // The Base URL you’d open in a browser
          browserURL: "https://scan.test.btcs.network"
        }
      }
    ]
  },
};
