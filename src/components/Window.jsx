import React, { useRef } from "react";
import { Stars } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

const Window = ({ position, rotation, frameColor = "#333333" }) => {
  const windowRef = useRef();
  const { camera, gl } = useThree();
  gl.setClearColor(new THREE.Color("#000000"));

  // Adjust the camera position to ensure it captures the stars
  camera.position.set(0, 0, 10); // Example position, adjust as needed

  return (
    <>
      {/* Stars Component */}
      <Stars
        radius={100} // Radius of the inner sphere where stars are visible
        depth={50} // Depth of area where stars are scattered
        count={5000} // Number of stars
        factor={4} // Star size factor
        saturation={0} // Color saturation
        fade // Fading effect
      />

      <group position={position} rotation={rotation}>
        {/* Window Frame */}
        <mesh position={[0, 0, -0.05]}>
          <boxGeometry args={[2.2, 2.2, 0.1]} />
          <meshStandardMaterial color={frameColor} />
        </mesh>

        {/* Glass Pane */}
        <mesh ref={windowRef} position={[0, 0, 0.03]}>
          <planeGeometry args={[2, 2]} />
          <meshStandardMaterial color="white" opacity={0.2} transparent />
        </mesh>
      </group>
    </>
  );
};

export default Window;
