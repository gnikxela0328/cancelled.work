import React from 'react';
import { Suspense } from 'react';
import Hand from './models/hand';
import Loader from './common/loader';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'

import "./assets/css/output.css"


const CameraRig = () => {
    return (
        <>
            <OrbitControls
                enableDamping
                enableRotate
                enableZoom
                maxZoom={2}
                enablePan={false}
            />
        </>
    )
}

const App = () => {
    return (
        <div style={{height: "100vh"}} onClick={e => {
            e.preventDefault()
            window.open("https://incognitothief.bandcamp.com/track/shadow-flex-manifesto")
        }}>
            <Canvas style={{ background: "white" }}> 
                <Suspense fallback={<Loader />}>
                    <Hand />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default App;
