// scripts/deploy_nft.js
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with account:", deployer.address);

  // 1 gwei tip
  const ONE_GWEI = 1_000_000_000;

  // 1) Get the factory for your CoreNFT contract
  const NFT = await ethers.getContractFactory("CoreNFT");

  // 2) Deploy, passing your baseURI and gasPrice override
  const nft = await NFT.deploy(
    "https://Amir0uch.github.io/nft-collection/generated_metadata/",
    { gasPrice: ONE_GWEI }
  );

  // 3) Wait for the deployment transaction to be mined
  await nft.waitForDeployment();

  console.log("✅ CoreNFT deployed to:", nft.target);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
