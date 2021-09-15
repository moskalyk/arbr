import {useEffect, useRef, useState} from 'react'

import * as THREE from 'three'
import Globe from 'react-globe.gl';
import * as topojson from "topojson-client";
import arbr from './images/arbr.png'
// import TrackballControls from 'three-trackballcontrols';
// const OrbitControls = require('three-orbitcontrols')


    const polygonsMaterial = new THREE.MeshLambertMaterial({ color: 'darkslategrey', side: THREE.DoubleSide });


const App = () => {

const N = 300;
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
  }));

  const [landPolygons, setLandPolygons] = useState([]);

    useEffect(() => {
      // load data
      fetch('//unpkg.com/world-atlas/land-110m.json').then(res => res.json())
        .then(landTopo => {
          setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
        });
    }, []);

  return(
    <>
       <div className="header" style={{textAlign: 'center', fontSize: '69px', fontFamily: 'Univers'}}>
           <img src={arbr} />
           <p style={{color: '#707070'}}>terrform APIs for 1/1 Earth</p>
            <h1 className="title">🚪</h1>
       </div>
      <Globe
      backgroundColor="rgba(0,0,0,0)"
      showGlobe={false}
      showAtmosphere={false}
      polygonsData={landPolygons}
      polygonCapMaterial={polygonsMaterial}
      polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
      pointsData={gData}
    />;
    </>
    )
}

export default App;