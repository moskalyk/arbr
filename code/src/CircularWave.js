import {useEffect, useState} from 'react'

import CircularAudioWave from './dist/circular-audio-wave.js'

const CircularWave = () => {

	const [wave, setWave] = useState(null)

	useEffect(() => {
		setWave(new CircularAudioWave(document.getElementById('chart-container')))
		// wave.loadAudio('audio/audio1.mp3');

	})

	return (
			<div>
				<div id="chart-container" style={{width: '100px', height: '100px'}}></div>
				<button onClick={() => wave.play()}>Play</button>
			</div>
		)
}

export default CircularWave