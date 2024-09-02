import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

// Extend BoxGeometry for the table parts
extend({ BoxBufferGeometry: THREE.BoxGeometry });

const InteractiveTable = ({ position }) => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const { scale } = useSpring({
    scale: clicked ? 1.1 : 1,
    config: { tension: 170, friction: 12 },
  });

  // Table dimensions
  const tableTop = [3, 0.2, 2]; // Length, Height, Width
  const legHeight = 1.5;
  const legSize = [0.2, legHeight, 0.2]; // Thickness, Height, Thickness

  return (
    <animated.group
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      {/* Table Top */}
      <animated.mesh position={[0, legHeight / 15, 0]}>
        <boxBufferGeometry args={tableTop} />
        <meshStandardMaterial />
      </animated.mesh>

      {/* Table Legs */}
      <animated.mesh position={[-1.4, -legHeight / 2, -0.9]}>
        <boxBufferGeometry args={legSize} />
        <meshStandardMaterial color={"orange"} />
      </animated.mesh>

      <animated.mesh position={[1.4, -legHeight / 2, -0.9]}>
        <boxBufferGeometry args={legSize} />
        <meshStandardMaterial color={"orange"} />
      </animated.mesh>

      <animated.mesh position={[-1.4, -legHeight / 2, 0.9]}>
        <boxBufferGeometry args={legSize} />
        <meshStandardMaterial color={"orange"} />
      </animated.mesh>

      <animated.mesh position={[1.4, -legHeight / 2, 0.9]}>
        <boxBufferGeometry args={legSize} />
        <meshStandardMaterial color={"orange"} />
      </animated.mesh>
    </animated.group>
  );
};

export default InteractiveTable;
