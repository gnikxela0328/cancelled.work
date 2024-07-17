import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
    const { progress } = useProgress()
    return (
        <Html className='text-white text-2xl' center>{progress} % loaded</Html>
    )

}

export default Loader;