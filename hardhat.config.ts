import "@nomicfoundation/hardhat-toolbox";
require("hardhat-docgen");
require("dotenv").config();

const config = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url: process.env.POLYGON_NETWORK_NODE,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGON_ETHERSCAN_API_KEY,
  },
  // paths: {
  //   artifacts: "../frontend/ABIs",
  // },
  // docgen: {
  //   path: "./docs",
  //   clear: true,
  //   runOnCompile: true,
  // },
};

export default config;
