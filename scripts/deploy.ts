import { ethers } from "hardhat";

async function main() {
  const [deployer, account2] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("ttt");
  const token = await Token.deploy();

  const Token1 = await ethers.getContractFactory("TetherToken");
  const token1 = await Token1.deploy(100000*Math.pow(10,6), 'Tether USDT', 'USDT', 6);

  console.log("Token address:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
