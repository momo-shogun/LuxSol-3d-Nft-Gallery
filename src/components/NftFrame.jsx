import React from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const NFTFrame = ({ position, url, depth = 0.2 }) => {
  // Load the texture using useLoader from Three.js
  const texture = useLoader(THREE.TextureLoader, url);

  // Create the frame and glass material
  const frameMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 }); // Black color for the frame
  const glassMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 0.9,
    roughness: 0.1,
    opacity: 0.3,
    transparent: true,
  });

  return (
    <group position={position}>
      {/* Frame */}
      <mesh material={frameMaterial} position={[0, 0, depth * -0.3]}>
        <boxBufferGeometry args={[2.2, 3.2, depth]} />
      </mesh>

      {/* Artwork */}
      <mesh position={[0, 0, depth * 0.5]} renderOrder={1}>
        <planeBufferGeometry args={[2, 3]} />
        <meshBasicMaterial map={texture} />
      </mesh>

      {/* Glass */}
      <mesh position={[0, 0, depth * 0.7]} renderOrder={2}>
        <planeBufferGeometry args={[2, 3]} />
        <meshStandardMaterial {...glassMaterial} />
      </mesh>
    </group>
  );
};

export default NFTFrame;
