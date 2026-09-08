import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';
import { Lucy } from '../components/Lucy';
import { Float, OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import { Suspense, useRef } from 'react';
import * as THREE from 'three';
import Loader from '../components/Loader';
// import ScrollIndicator from '../components/ScrollIndicator';

function SpotlightEffect() {
  const lightRef = useRef();
  const texture = useLoader(THREE.TextureLoader, '/assets/sky2.jpeg');

  useFrame((state) => {
    const time = state.clock.getElapsedTime() / 3;
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(time) * 2.5;
      lightRef.current.position.z = Math.sin(time) * 2.5;
    }
  });

  return (
    <>
      <hemisphereLight args={[0xffffff, 0x8d8d8d, 0.25]} />
      <spotLight
        ref={lightRef}
        position={[2.5, 5, 2.5]}
        intensity={100}
        angle={Math.PI / 6}
        penumbra={1}
        decay={2}
        map={texture}
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={2}
        shadow-camera-far={10}
        shadow-focus={1}
        shadow-bias={-0.003}
      />
    </>
  );
}

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section
      className="flex items-start justify-center min-h-screen overflow-visible md:items-start md:justify-start c-space"
      id="home"
    >
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: '100vw', height: '100vh' }}
      >
        <Canvas camera={{ position: [0, 1, 3] }} shadows>
          <Suspense fallback={<Loader />}>
            <SpotlightEffect />

            <mesh
              position={[0, -2, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
              receiveShadow
            >
              <planeGeometry args={[50, 50]} />
              <shadowMaterial opacity={0.8} />
            </mesh>

            <Float>
              <Lucy
                scale={isMobile ? 0.0018 : 0.0024}
                position={isMobile ? [0, -0.2, 0] : [1.3, -0.2, 0]}
                rotation={[-Math.PI / 8, Math.PI - Math.PI / 4, 0]}
              />
            </Float>

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
            />
          </Suspense>
        </Canvas>
      </figure>

      {/* <ScrollIndicator /> */}
    </section>
  );
};

export default Hero;
