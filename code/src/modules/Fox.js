import { init } from "@textile/eth-storage";
import axios from 'axios'
class Fox {
	// ~foxes~ stash
	constructor(signer){
		this.identity = signer
		this.furLock = []
		this.pouch = []
		this.counter = 0
		this.threshold = 10
	}

	/*
		a pressure lock of windowed data
	*/
	async snatch(blueberryWindow){
		if(this.counter < this.threshold){
			this.furLock.push(blueberryWindow)
			this.counter ++
		}else{
			await this.snapshot(this.furlock)
			this.counter = 0
			this.furlock = []
		}
	}

	/*
		take a matrix agreggated from the faun p2p fluence service network
	*/
	async snapshot(matrix){
		const blob = new Blob([JSON.stringify(matrix, null, 2)], {type : 'application/json'});
		console.log(blob)

		const file = new File([blob], `capture-${Date.now()}.txt`, {
		  type: "text/plain",
		  lastModified: new Date().getTime(),
		});

		const storage = await init(this.identity);

		await storage.addDeposit();

		const { id, cid } = await storage.store(file);

		console.log(cid)

		this.pouch.push(cid)

		return cid
	}

	/*
		checks to see if fox is online
	*/
	isOnline(){
		return true
	}

	/*
		create a mult-cid signing of the data pouch using the identity
	*/
	sign(){
		const me = this.identity
		const cryptoSig = me.sign(
			JSON.stringify(
				this.pouch
				)
			)
		return cryptoSig;
	}

	/*
		hydrate from ipfs using the pouch of cids to be consumed by fog
	*/
	hydrate(){
		// hydrate a pouch of CID blueberry window recordings
		const hydratedPromises = this.pouch.map(async (cid) => {
			// some axios to an IPFS pinata gateway
			const data = await axios(cid)
			return data
		})

		const hydration = Promise.all(hydratedPromises)

		return hydration;
	}
}

export default Fox

