import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/three';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Extend the BoxBufferGeometry
extend({ BoxBufferGeometry: THREE.BoxGeometry });

const InteractiveCube = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { scale } = useSpring({
    scale: clicked ? 1.5 : 1,
    config: { tension: 170, friction: 12 },
  });

  return (
    <animated.mesh
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </animated.mesh>
  );
};

export default InteractiveCube;
