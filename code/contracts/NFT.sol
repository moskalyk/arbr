

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./NativeMetaTransaction.sol";

contract NFT is Ownable, ERC721, NativeMetaTransaction {
    string public contractURI;

    constructor (string memory name_, string memory symbol_) Ownable() ERC721(name_, symbol_) {
        _initializeEIP712(name_);
    }

    function setBaseURI(string memory baseURI_) public onlyOwner {
        _setBaseURI(baseURI_);
    }

    function setContractURI(string memory contractURI_) public onlyOwner {
        contractURI = contractURI_;
    }

    function mint(uint256 tokenId, string memory tokenURI) public onlyOwner {
        _safeMint(owner(), tokenId);
        _setTokenURI(tokenId, tokenURI);
    }

    /**
    * As another option for supporting trading without requiring meta transactions, override isApprovedForAll to whitelist OpenSea proxy accounts on Matic
    */
    function isApprovedForAll(
        address _owner,
        address _operator
    ) public override view returns (bool isOperator) {
        if (_operator == address(0x58807baD0B376efc12F5AD86aAc70E78ed67deaE)) {
            return true;
        }
        
        return ERC721.isApprovedForAll(_owner, _operator);
    }
} 