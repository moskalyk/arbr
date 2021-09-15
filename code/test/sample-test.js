const { expect } = require("chai");
const { ethers } = require("hardhat");

const daiContractAddress = '0xff795577d9ac8bd7d90ee22b6c1703490b6512fd';
const chargedParticleAddress = '0xF03EAB2b60eFB6E24C1b254A2D6fC91Eb639D6d3';
const chargedSettingsAddress = '0x57B5C64E0494a7Bd4A98B33C105E3ef31301dFdF';
const cpTreeAddress = '0x302b30C909d6694c8f0E4E0982B5628F39aF2187'

describe("CPTree", function () {

  it("Should get the welcome message", async function () {
    this.timeout(10000);
    const CPTree = await hre.ethers.getContractFactory("CPTree");
    const cptree = await CPTree.deploy(chargedParticleAddress);
    // const cptree = await CPTree.deploy(chargedParticleAddress, chargedSettingsAddress);
    await cptree.deployed();
    const res = await cptree.greeting()
    console.log(res)
    expect(res).to.equal("Welcome to the renewing arbor;");
    // console.log(await cptree._CP())  

    
    })

   it("Should plant a tree with mass", async function () {
    this.timeout(10000);
    const accounts = await hre.ethers.getSigners()
    const CPTree = await hre.ethers.getContractFactory("CPTree");
    const cptree = new ethers.Contract(cpTreeAddress, CPTree.interface, accounts[0]);
    const tokenId = 0 // get from the contract
    // string calldata walletManagerId, address assetToken, uint256 assetAmount, string memory tokenMediaURI
    const res = await cptree.plant('aave', daiContractAddress, 10, 'QmQW3dWkX9vPRDfPprhu8pqtVKAkroh9aXgfs5SqtpxpsM');

    console.log(res)
    // console.log(await cptree._CP())  



    
    })

  it("Should return the charge of a tree", async function () {
    const CPTree = await hre.ethers.getContractFactory("CPTree");
    const cptree = await CPTree.deploy(chargedParticleAddress);
    // const cptree = await CPTree.deploy(chargedParticleAddress, chargedSettingsAddress);
    await cptree.deployed();
    const tokenId = 0 // get from the contract
    const res = await cptree.getCharge(cptree.address, tokenId, 'aave', daiContractAddress)
    console.log(res.toString())
    // console.log(await cptree._CP())  


    
    })





    // it("Should plant a tree nft seed as a charged covalent", async function () {
    //   const CPTree = await hre.ethers.getContractFactory("CPTree");
    //   const NFT = await hre.ethers.getContractFactory("NFT");
    //   const cptree = await CPTree.deploy(chargedParticleAddress);

    //   const nft = await NFT.deploy('NFT', 'NFT');

    //   await cptree.deployed();
    //   await nft.deployed();
    //   console.log('deployed to NFT: ', nft.address)

    //   const tx = await nft.isApprovedForAll('0xE01A0ba2ca92AD5f63b989596d3f966b4a395448', cptree.address)
    //   console.log(tx)
    //   const tx1 = await nft.mint(0, "QmQW3dWkX9vPRDfPprhu8pqtVKAkroh9aXgfs5SqtpxpsM")
    //   console.log(tx1)
    //   try{
    //     const nftAddress = '0xbAD6a56C82776364AA4Db83B3d2d2FC3693eba7A';
    //     const tx = await cptree.plantSeed('aave', nft.address, 0, 'QmQW3dWkX9vPRDfPprhu8pqtVKAkroh9aXgfs5SqtpxpsM');
    //     console.log(tx)
    //   }catch(e){
    //     console.log(e)
    //   }

    // })

    // it("Should use a tree nft and discharge the held tokens", async function () {
    //   const CPTree = await hre.ethers.getContractFactory("CPTree");
    //   const cptree = await CPTree.deploy(chargedParticleAddress);
    //   await cptree.deployed();
    //   try{
    //     const tx = await cptree.use();
    //     console.log(tx)
    //   }catch(e){
    //     console.log(e)
    //   }
    // })
})
