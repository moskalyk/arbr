pragma solidity 0.7.6;

import "./interfaces/IChargedParticles.sol";
import "./interfaces/IChargedSettings.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/EnumerableSet.sol";

// Thinking of trees as types of peripheries to the planet,
// we can accomodate affrodances for interacting with the land
// inheriting the attributes of carbon sequestration
// and futures on timber prices for builing homes
// this is really exciting;

contract CPTree is ERC721 {
	using Counters for Counters.Counter;
	using EnumerableSet for EnumerableSet.UintSet;

	event Plant(uint256 tokenId);
	event Charge(uint256 charge);
	event Graft(uint256 tokenId);
	event Grow(uint256 tokenId);
	event Use(uint256 tokenId);
	event Trade(uint256 tokenId);

	Counters.Counter private _idCounter;
	IChargedParticles public _CP;
	IChargedSettings public _CS;
	mapping (uint256 => Tree) public _trees;
	mapping (address => EnumerableSet.UintSet) private _ownerMap;

	struct Tree {
		string walletManagerId;
		address assetToken;
		uint256 assetAmount;
		bool isUsed;
		uint256 rings;
		address[] graftTokens;
	}

	constructor(address chargedParticlesAddress)
	// constructor(address chargedParticlesAddress, address chargedSettingsAddress)
		public
	ERC721("CPTree", "CPTREE")
	{
		_CP = IChargedParticles(chargedParticlesAddress);
		// _CS = IChargedSettings(chargedSettingsAddress);

	}

	function greeting() public view returns (string memory) {
        return "Welcome to the renewing arbor;";
    }

	// create an NFT tree with tokens
	function plant(string calldata walletManagerId, address assetToken, uint256 assetAmount, string memory tokenMediaURI)
		external
	{
		address owner = _msgSender();

	    _idCounter.increment();
	    uint256 tokenId = _idCounter.current();
   		Tree memory tree;
   		tree.walletManagerId = walletManagerId;
   		tree.assetToken = assetToken;
   		tree.assetAmount = assetAmount;
   		tree.isUsed = false;
   		tree.rings = 1;   		

		Plant(tokenId);

		// _CS.setAllowedAssetToken(address(this), assetToken, true);
		IERC20(assetToken).approve(address(_CP), assetAmount);
		_CP.energizeParticle(
			address(this),
			tokenId,
			walletManagerId,
			assetToken,
			assetAmount,
			address(0x0)
		);

	    // chain link futures contract

	    _ownerMap[owner].add(tokenId);

	    // add token URI to tree tokenMediaURI
	    _safeMint(owner, tokenId);
	}

	function getCharge(address contractAddress, uint256 tokenId, string memory walletManagerId, address assetToken) external returns (uint256) {
		uint256 charge = _CP.currentParticleCharge(
  			contractAddress,
  			tokenId,
  			walletManagerId, 
  			assetToken
		);
		Charge(charge);
	}

	function getRings(address contractAddress, uint256 tokenId, string memory basketManagerId) external returns (uint256) {
		return _CP.currentParticleCovalentBonds(
  				contractAddress,
				tokenId,
			 	basketManagerId
			);
	}

	// plant from another nft seed
	function plantSeed(string calldata walletManagerId, address assetToken, uint256 nftTokenId, string memory tokenMediaURI) external {
		address owner = _msgSender();

	    _idCounter.increment();

    	Tree memory tree;
   		tree.walletManagerId = walletManagerId;
   		tree.assetToken = assetToken;
   		tree.assetAmount = 0;
   		tree.isUsed = false;
   		tree.rings = 1;

    	// tree.graftTokens[tree.rings] = assetToken;


	    uint256 tokenId = _idCounter.current();
   		_trees[tokenId] = tree;

		Plant(tokenId);

		// check to see if ERC is 721, first planting requirement
		IERC721(assetToken).approve(address(_CP), nftTokenId);
		// _CP.covalentBond(
		// 	address(this),
		// 	tokenId,
		// 	walletManagerId,
		// 	assetToken,
		// 	nftTokenId
		// );

	    // TODO: chain link futures contract to ftx endpoint

	    _ownerMap[owner].add(tokenId);

	    // add token URI to tree tokenMediaURI
	    _safeMint(owner, tokenId);
	}

	// use with NFTs
	function graft(string calldata walletManagerId, address assetToken, uint256 nftTokenId) external {
		// check to see that the erc721 token
		uint256 tokenId = _idCounter.current();


		// check to see if ERC is 721, first planting requirement
		IERC721(assetToken).approve(address(_CP), nftTokenId);
			_CP.covalentBond(
				address(this),
				tokenId,
				walletManagerId,
				assetToken,
				nftTokenId
		);

		Graft(tokenId);
	}

	// us with erc20
	function grow() external {
		// check to see that the erc20 token
		uint256 tokenId = _idCounter.current();
		Grow(tokenId);
	}

	// discharge particles
	function use() external {
		uint256 tokenId = _idCounter.current();
		Use(tokenId);

		address payable owner = _msgSender();
	    require(
	      _isApprovedOrOwner(owner, tokenId),
	      "NFTree: caller is not owner nor approved"
	    );

	    Tree memory tree = _trees[tokenId];

	    require(
	      !tree.isUsed,
	      "CPTree: tree is already used"
	    );

    	_trees[tokenId].isUsed = true; 

    // _CP.dischargeParticle(
    //   owner,
    //   address(this),
    //   tokenId,
    //   tree.walletManagerId,
    //   tree.assetToken
    // );
    	_burn(tokenId);
	}

	// // swap 2 charged nfts
	// function trade() external {
	// 	uint256 tokenId = _idCounter.current();
	// 	Use(tokenId);
	// }
}