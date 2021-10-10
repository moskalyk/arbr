// import _ from 'lodash';
import { useEffect, useState } from 'react';

// doc control
// import { getUpdatedDocFromText, initDoc, SyncClient } from '../aqua/app/sync';
import { withErrorHandlingAsync } from '../../utils/util.js';
import { addEntry, registerTextState } from '../../aqua/_aqua/app.js';

// user control
import { initAfterJoin, updateOnlineStatuses } from '../../aqua/_aqua/app.js';
import { registerUserStatus } from '../../aqua/_aqua/app';
import { Fluence, FluencePeer, PeerIdB58 } from '@fluencelabs/fluence';
const EventEmitter = require( 'events' );


class Faun extends EventEmitter {

    // public client: SyncClient;
    // public peers: [any];

    constructor(){
    	super()
        // this.client = syncClient;
        this.peers = [{user: 'ethlorian', isOnline:false}]


        // this.client.start()

        //register on changes
        this.feed()

        //register userlist
        this.surroundings()

        //TODO: register compute size

    }

    // list feed
    async feed(){
        const self = this
        // register cid handler
        registerTextState({
            notifyTextUpdate: (changes, isAuthorized) => {
                console.log('CHANGES')
                if (changes) {
                    console.log(changes)
                    // self.emit('lore', changes)
                    // this.client.receiveChanges(changes);
                }
            }
        })
        try{
            // const res = await getHistory();
                // console.log('RES')
                // console.log(res)
            // for (let e of res.entries) {
            //     console.log(JSON.parse(e.body))
            //     // this.client.receiveChanges(e.body);
            // }

            // if (this.client.getDoc() === undefined) {
            //     this.client.syncDoc(initDoc());
            // }
        }catch(e){
            console.log('error with feed')
            console.log(e)
        }
    }

    // file size calculator
    examine(cidList){
        // TODO: create service in fluence
    }

    // push a particle
    // push a particle
    async record(cid){
        console.log('calling window')
        try{
            const res = await addEntry(cid);
            console.log(cid)

        }catch(e){
            console.log(e)
            console.log('error sending change')
        }

            // broadcastUpdates(String(Math.random()), this.client)
    }

    // # of online peers
    surroundings(){
        let self = this;

        registerUserStatus({
            notifyOnline: (user, onlineStatus) => {
                console.log('ONLINE')
                console.log(user)
                console.log(onlineStatus)
            },
            notifyUserAdded: (user, isOnline) => {
                console.log('NEW_USER')
                console.log(user)
                console.log(isOnline)
                // self.peers.push({user: user, isOnline: isOnline});


                // setUsers((prev) => {
                    // const u = user;
                    // const result = new Map();
                    // if (result.has(u.peer_id)) {
                    //     return result;
                    // }

                    // result.set(u.peer_id, {
                    //     name: u.name,
                    //     id: u.peer_id,
                    //     isOnline: isOnline,
                    // });



                //     return result;
                // });
            },

            notifyUserRemoved: (userLeft) => {
                // todo
                console.log('USER_LEFT')
                console.log(userLeft)
                // setUsers((prev) => {
                //     const result = new Map(prev);
                //     result.delete(userLeft);
                //     return result;
                // });
            }
        })
    }

    numbers(){
        let count = 0
        let userSet = {}

        this.peers.concat(...this.peers) /* flatten the array */
        .map(peer => {
            if(!(peer.user.name in userSet) && peer.isOnline){
                userSet[peer.user.name] = peer
                count++
                return peer
            } else {
                return
            }
            // peer.isOnline
        }) /* return only enabled: true */

        console.log('LENGTH')
        console.log(count)
        this.emit('peerCount', count)
        return count
    }
}

// const broadcastUpdates = _.debounce((text: string, syncClient: SyncClient) => {
//     // let doc = syncClient.getDoc();
//     if (doc) {
//         let newDoc = getUpdatedDocFromText(doc, text);
//         // syncClient.syncDoc(newDoc);
//     }
// }, 100);


export default Faun;

//  // p2p fluence mailbox for messages
//  // to align with local blueberry instantiation
// class Faun extends EventEmitter {

// 	// faun consumes a blueberry, begins the fun, & emits lor
// 	constructor(blueberry, nodeId){ 
// 		super()
// 		this.node = nodeId
// 		this.blueberry = blueberry
// 	}

// 	/*
// 		a consumer of fluence network partcles spun
// 	*/
// 	consumer() {

// 		// loop through connections on particles and recieve window
// 		// this.node.peers.map(() => {})

// 		// TODO: for testing purposes
// 		let matrix = [[1,2,3],[3,6,9]]
// 		setInterval((faun) => {
// 				faun.emit('lor', matrix)
// 		}, 1000, this)

// 		// align timestamps via sorting of greatest timestamp beginning

// 		// emits lor as an event
// 		// this.emit('lor', matrix)
// 	}
// }

// export default Faun


// export const CollaborativeEditor = () => {
//     const [clock, setClock] = useState<boolean>(false)
//     const [text, setText] = useState<string | null>(null);
//     const [syncClient, setSyncClient] = useState(new SyncClient());

//     useEffect(() => {
//         let faun;

//         // syncClient.handleSendChanges = (changes: string) => {
//         //     withErrorHandlingAsync(async () => {
//         //         const res = await addEntry(changes);
//         //         if (res.ret_code !== 0) {
//         //             throw new Error(
//         //                 `Failed to add message to history service, code=${res.ret_code}, message=${res.err_msg}`,
//         //             );
//         //         }
//         //     });
//         // };

//         // registerTextState({
//         //     notifyTextUpdate: (changes, isAuthorized) => {
//         //         if (changes) {
//         //             syncClient.receiveChanges(changes);
//         //         }
//         //     }
//         // })
        

//         // syncClient.start();

//         // don't block
//         // withErrorHandlingAsync(async () => {
//         //     const res = await getHistory();
//         //         console.log('RES')
//         //         console.log(res)
//         //     for (let e of res.entries) {
//         //         syncClient.receiveChanges(e.body);
//         //     }

//         //     if (syncClient.getDoc() === undefined) {
//         //         syncClient.syncDoc(initDoc());
//         //     }
//         // });

//         if(!clock){
//             setClock(true)
//             faun = new Faun(syncClient)

//             faun.client.handleDocUpdate = (doc) => {
//                 setText(doc.text.toString());
//             };

//             faun.record()

//             setInterval(() => {
//                 console.log(faun.numbers())
                
//             }, 1000)
//         }

//         return () => {
//             faun.client.stop();
//         };
//     }, []);

//     const handleTextUpdate = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         const newText = e.target.value;
//         setText(newText);
//         broadcastUpdates(newText, syncClient);
//     };

//     return (
//         <textarea
//             spellCheck={false}
//             className="code-editor"
//             disabled={text === null}
//             value={text ?? ''}
//             onChange={handleTextUpdate}
//         />
//     );
// };