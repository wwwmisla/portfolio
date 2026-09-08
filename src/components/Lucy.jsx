import { useEffect, useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import * as THREE from 'three';

export function Lucy({
  position = [1.3, -0.2, 0],
  rotation = [-Math.PI / 2, 0, 0],
  scale = 0.0024,
  ...props
}) {
  const group = useRef();
  const geometry = useLoader(PLYLoader, '/models/ply/binary/Lucy100k.ply');

  useEffect(() => {
    geometry.computeVertexNormals();
  }, [geometry]);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.position.y = THREE.MathUtils.damp(
        group.current.position.y,
        position[1],
        4,
        delta
      );
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={rotation}
      scale={scale}
      position={[position[0], 5, position[2]]}
    >
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshLambertMaterial color={0xbcbcbc} />
      </mesh>
    </group>
  );
}
