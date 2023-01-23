import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
      forking: {
        url: 'https://cloudflare-eth.com/'
      }
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.4.17",
        settings: {},
      },
    ],
  },
};

export default config;
