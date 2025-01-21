import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, OrbitControls } from '@react-three/drei';
import Navbar from '../components/navbar.jsx';

function Model(props) {
    const { scene } = useGLTF('/Earth.glb');
    return <primitive object={scene} {...props} />;
}

function Earth() {
    return (
        <div>
            <Navbar />
            <Canvas
                dpr={[1, 2]}
                style={{ position: "absolute" }}
                camera={{ fov: 50 }}
            >
                <color attach="background" args={["#9f9f9f"]} />
                {/* OrbitControls for limited zoom only */}
                <OrbitControls
                    enableZoom={true}
                    zoomSpeed={0.5}
                    minDistance={2}  // Minimum zoom distance
                    maxDistance={10} // Maximum zoom distance
                    enablePan={false}
                    enableRotate={false}
                />
                <PresentationControls speed={1.5} global zoom={0.7}>
                    <Stage environment={"apartment"} adjustCamera={false} shadows={false}>
                        <Model scale={0.003} />
                    </Stage>
                </PresentationControls>
            </Canvas>
        </div>
    );
}

export default Earth;
