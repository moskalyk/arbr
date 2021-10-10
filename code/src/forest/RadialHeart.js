import {useEffect, useState} from 'react'
import radialHeartGif from './radial_heart.gif'
import CircularAudioWave from '../dist/circular-audio-wave.js'

const RadialHeart = (props) => {

	const [tick, setTick] = useState(false)
	const [wave, setWave] = useState(null)

	useEffect(() => {
		if(props.clock == 'radial-aura'){

			const tree = document.getElementsByTagName("polygon")
			console.log(tree)

			// wave to Boron flame
			// 
			// https://www.youtube.com/watch?v=zjzFj5mvFME
			if(!tick) {
				setTick(true)
				// setWave(new CircularAudioWave(document.getElementById('chart-container')))
			}
		}
		// wave.loadAudio('audio/audio1.mp3');

	}, [tick])

	return (
			<div>
				{
					props.clock == 'radial-aura' ? 
						<div>
							{/*<div id="chart-container" style={{width: '100px', height: '100px'}}></div>*/}
							{/*a hack but a small one, cascades. google chrome wasn't cooperating. justified.*/}
							<div style={{display: 'flex', justifyContent: 'center'}}>
								<img width={{width: '244px'}}src={radialHeartGif} />
							</div>
						</div>
						:
						null
				}
			</div>
		)
}

export default RadialHeart