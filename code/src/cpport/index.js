// import axios from 'axios'
import axios from 'axios'
import nlp from 'compromise'

class CPPort {

	constructor(apiKey, ethersProvider){
		this.apiKey = apiKey
		this.ethersProvider = ethersProvider
	}

	/*
		@param photonAddress	string 			charged particle photon address 
												that encapsulates covalent bonds using image likeness search
		returns [{photon}] 						distribtuion of metadata value weights in a list
	*/
	async getCloud(photonAddress) {
		// e.g.
		const chargedCloudSet = []
		// get charged particle implementation

		// API loop on nft list calls
		let image = 'https://gateway.pinata.cloud/ipfs/QmZie8iXw2pnTpjqoaMkaSFLYC6nz9L3VEUHDJcDVDji2T/Screen%20Shot%202021-08-01%20at%201.45.28%20PM.png'

		let res

		const options = {
		  method: 'POST',
		  url: 'https://api.nftport.xyz/visual_search_by_url',
		  headers: {'Content-Type': 'application/json', Authorization: '90959bcc-3bba-4cd3-9760-a669635f0985'},
		  data: {
		    url: image
		  }
		};

		try{
			res = await axios.request(options)
		}catch(e){
			console.log(e)
		}

		if(res){
			res.data.images.map((cp) => {
				// make call on raw_metadata
				// loop through text
				nlp(cp.raw_metadata.description).topics().json().map((term) => {
					chargedCloudSet.push(term.text)
				})
			})
		}
		return chargedCloudSet
	}

	/*
		@param lootQuery 		string			NFTPort query to search the metaverse
		returns [NFTs] 							distribtuion of metadata value weights
	*/
	searchCloud(lootQuery) {

		return []
	}

	/*
		@param latLng			{lat, lng} 		Geocached query of NFT metadata locations
		returns [NFTs] 							distribtuion of metadata value weights based on proximity
	*/
	getGeoCached(latLng) {
		return []
	}
}

export default CPPort;