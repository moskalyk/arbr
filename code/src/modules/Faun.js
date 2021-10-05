 const EventEmitter = require( 'events' );

 // p2p fluence mailbox for messages
 // to align with local blueberry instantiation
class Faun extends EventEmitter {

	// faun consumes a blueberry, begins the fun, & emits lor
	constructor(blueberry, nodeId){ 
		super()
		this.node = nodeId
		this.blueberry = blueberry
	}

	/*
		a consumer of fluence network partcles spun
	*/
	consumer() {

		// loop through connections on particles and recieve window
		// this.node.peers.map(() => {})

		// TODO: for testing purposes
		let matrix = [[1,2,3],[3,6,9]]
		setInterval((faun) => {
				faun.emit('lor', matrix)
		}, 1000, this)

		// align timestamps via sorting of greatest timestamp beginning

		// emits lor as an event
		// this.emit('lor', matrix)
	}
}

export default Faun
