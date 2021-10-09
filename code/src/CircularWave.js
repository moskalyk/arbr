import {useEffect} from 'react'

import CircularAudioWave from './dist/circular-audio-wave.js'

let wave;
const CircularWave = () => {

	useEffect(() => {
		wave = new CircularAudioWave(document.getElementById('chart-container'));
    	wave.loadAudio('audio/audio1.mp3');
	})

	return (
			<div>
				<div id="chart-container" style="width: 100%; height: 100%;"></div>
				<button onclick="wave.play()">Play</button>
			</div>
		)
}

export default CircularWave