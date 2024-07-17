import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber'

import hand from '../assets/objects/hand_web_mat_1_3.gltf'

const Hand = () => {
    const myMesh = React.useRef()
    const gltf = useLoader(GLTFLoader, hand)

    // Animation
    useFrame(({ clock }) => {
        myMesh.current.position.y = Math.sin(clock.getElapsedTime()) / 4
        myMesh.current.rotation.y = clock.getElapsedTime() / 4
    })

    return (
        <>
            <directionalLight color="yellow" position={[0, -2, 1]} intensity={2} />
            <directionalLight color="purple" position={[0, 0, 2]} intensity={4} />
            <mesh ref={myMesh}>
                <primitive object={gltf.scene} scale={.26} position={[0,0,0]} rotation={[-.5,1.5,0]} />
                <meshStandardMaterial />
            </mesh>
        </>
    )
}

export default Hand;