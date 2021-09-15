// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const Greeter = await hre.ethers.getContractFactory("Greeter");
  const CPTree = await hre.ethers.getContractFactory("CPTree");
  const NFT = await hre.ethers.getContractFactory("NFT");

  // const greeter = await Greeter.deploy("Hello, Hardhat!");
  // await greeter.deployed();
  const cptree = await CPTree.deploy('0xF03EAB2b60eFB6E24C1b254A2D6fC91Eb639D6d3');
  
  // const nft = await NFT.deploy("NFT", "NFT");
  // await nft.deployed();
  await cptree.deployed();

  // console.log("Greeter deployed to:", greeter.address);
  console.log("CPTree deployed to:", cptree.address);
  // console.log("NFT deployed to:", nft.address);

  // const tx = await nft.mint(1, "QmQW3dWkX9vPRDfPprhu8pqtVKAkroh9aXgfs5SqtpxpsM")
  // console.log(tx)
  // const res = await nft.balanceOf('0xE01A0ba2ca92AD5f63b989596d3f966b4a395448')
  // console.log(res.toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
