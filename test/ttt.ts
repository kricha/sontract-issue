import { utils } from 'ethers';
// import { ethers } from 'ethers';
import { time, loadFixture, impersonateAccount } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ttt", function () {

  const usdtAddress = "0xdac17f958d2ee523a2206206994597c13d831ec7"

// the slot must be a hex string stripped of leading zeros! no padding!
// https://ethereum.stackexchange.com/questions/129645/not-able-to-set-storage-slot-on-hardhat-network
const ownerSlot = "0x0"

it("Change USDT ownership", async function () {

  const [signer, addr1, addr2] = await ethers.getSigners();
  const address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

  // impersonateAccount(address).then(signer => {
  //   
  //   usdt.balanceOf()
  // });
  const impersonatedSigner = await ethers.getImpersonatedSigner("0xF977814e90dA44bFA03b6295A0616a897441aceC");
  const usdt = await ethers.getContractAt("IUSDT", usdtAddress,impersonatedSigner);
  console.log(await impersonatedSigner.getBalance())
  console.log(await usdt.transfer(signer.address, '100000000', {from: impersonatedSigner.address, gasLimit: 400000}))
  console.log(await usdt.balanceOf(signer.address))


  const ttt = await ethers.getContractFactory("BulkTransfer2");
    const tttContr = await ttt.deploy();
    const multiSender = await tttContr.deployed();
  
  await usdt.connect(signer).approve(multiSender.address, 300000000000000).then(console.log);

  console.log("Allowance:", (await usdt.allowance(signer.address, multiSender.address)).toNumber());
  
      
      multiSender.connect(signer).execute2(usdt.address, [addr1.address, addr2.address], ['1', '2']).then(rec=>{
        console.log(rec);
        
      }).catch(err=>{
        console.log(err);
        
      })


  // await impersonatedSigner.sendTransaction({to: signer.address, value: 12});    

  // console.log(impersonatedSigner);
  
    // const [signer] = await ethers.getSigners();
    // console.log(signer.address);
    
    
    // const signerAddress = await signer.getAddress();

    // const router = new ethers.Contract('0xe592427a0aece92de3edee1f18e0157c05861564', [{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_WETH9","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"WETH9","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactInputParams","name":"params","type":"tuple"}],"name":"exactInput","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMinimum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactInputSingleParams","name":"params","type":"tuple"}],"name":"exactInputSingle","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"bytes","name":"path","type":"bytes"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"}],"internalType":"struct ISwapRouter.ExactOutputParams","name":"params","type":"tuple"}],"name":"exactOutput","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMaximum","type":"uint256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ISwapRouter.ExactOutputSingleParams","name":"params","type":"tuple"}],"name":"exactOutputSingle","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes[]","name":"data","type":"bytes[]"}],"name":"multicall","outputs":[{"internalType":"bytes[]","name":"results","type":"bytes[]"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"refundETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowed","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitAllowedIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"selfPermitIfNecessary","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"sweepToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"sweepTokenWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"int256","name":"amount0Delta","type":"int256"},{"internalType":"int256","name":"amount1Delta","type":"int256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"uniswapV3SwapCallback","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"unwrapWETH9","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountMinimum","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"feeBips","type":"uint256"},{"internalType":"address","name":"feeRecipient","type":"address"}],"name":"unwrapWETH9WithFee","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}], signer);


    // console.log(await usdt.balanceOf(signer.address));
    
    // console.log(await router.exactInput(['0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20001f4dac17f958d2ee523a2206206994597c13d831ec7000bb88e0e57dcb1ce8d9091df38ec1bfc3b224529754a',signer.address,1674456155,'700000000000000000','4429798603556058661946']));
    

    // storage value must be a 32 bytes long padded with leading zeros hex string
    // const value = ethers.utils.hexlify(ethers.utils.zeroPad(signerAddress, 32))

    // await ethers.provider.send("hardhat_setStorageAt", [usdtAddress, ownerSlot, value])

    // expect(await usdt.getOwner()).to.be.eq(signerAddress)
})

  async function deployTokenFixture() {
    
    const TokenFactory = await ethers.getContractFactory("TetherToken");
    const [owner, addr1, addr2] = await ethers.getSigners();

    const ttt = await ethers.getContractFactory("ttt");
    const tttContr = await ttt.deploy();
    const multiSender = await tttContr.deployed();

    const TokenContract = await TokenFactory.deploy(1000000000000, 'Thether USDˇ', 'USDT', 6);

    const usdt = await TokenContract.deployed();
    
    await usdt.transfer(addr1.address, 100000*Math.pow(10,6)).then(rec1=>{
      // console.log(rec1);
      
      usdt.transfer(addr2.address, 100000*Math.pow(10,6)).then(rec2=>{
        // console.log(rec2);
        
        return rec2;
      });
    })

    // Fixtures can return anything you consider useful for your tests
    return { tttContr, multiSender, usdt, owner, addr1, addr2 };
  }

  // describe("Deployment USDT", function () {

  //   it("Check owner balance", async function () {
  //     const { usdt, owner, addr1 } = await loadFixture(deployTokenFixture);

  //     usdt.balanceOf(owner.address).then(balanceBN => {
  //       expect(balanceBN.toNumber()).to.equal(800000*Math.pow(10,6));
  //     })
  //     // expect((await usdt.balanceOf(owner.address)).toNumber()).to.equal(800000*Math.pow(10,6))
  //   });

  //   it("Check addr1 balance", async function () {
  //     const { usdt, owner, addr1 } = await loadFixture(deployTokenFixture);
  //     expect((await usdt.balanceOf(addr1.address)).toNumber()).to.equal(100000*Math.pow(10,6))
  //   });

  //   it("Check addr2 balance", async function () {
  //     const { usdt, owner, addr2 } = await loadFixture(deployTokenFixture);
  //     expect((await usdt.balanceOf(addr2.address)).toNumber()).to.equal(100000*Math.pow(10,6))
  //   });


  //   // it("Check addr2 balance", async function () {
  //   //   const { usdt, addr2 } = await loadFixture(deployTokenFixture);

  //   //   expect(await usdt.balanceOf(addr2.address)).to.equal(100000*Math.pow(10,6))
  //   // });
  // });



  // describe("MultiSender", function () {

  //   it("execute2 method", async function () {
  //     const { tttContr, multiSender, usdt, owner, addr1, addr2 } = await loadFixture(deployTokenFixture);
      
      // await usdt.approve(multiSender.address, 300);
      // console.log("Allowance:", (await usdt.allowance(owner.address, multiSender.address)).toNumber());
      
      // multiSender.execute2(usdt.address, [addr1.address, addr2.address], ['100', '200']).then(rec=>{
      //   console.log(rec);
        
      // }).catch(err=>{
      //   console.log(err);
        
      // })
      
  //   });
  // });
});
