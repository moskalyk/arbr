 const EventEmitter = require( 'events' );

 // spectrum signature module
class Faun extends EventEmitter {

	constructor(nodeId){ 
		this.node = nodeId
	}

	sink() {

		// loop through connections on particles and recieve window
		// this.node.peers.map(() => {})

		// TODO: for testing purposes
		let matrix = [[1,2,3],3,6,9]
		setInterval((faun) => {
				faun.emit('lor', matrix)
		}, 1000, this)

		// align timestamps via sorting of greatest timestamp beginning

		// emit
		// this.emit('lor', matrix)
	}
}

export default Faun
