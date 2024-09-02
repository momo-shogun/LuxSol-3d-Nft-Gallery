import React, { useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import ThreeDInputComponent from "./ThreeDInputComponent";
const AnimatedText = ({ text, buttonLabel }) => {
  const handleSubmit = (inputValue) => {
    console.log("Submitted Text:", inputValue);
  };
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {/* 3D Text */}
      <Text
        fontSize={0.5}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 0]}
        smooth={1}
        letterSpacing={-0.025}
      >
        {text}
      </Text>

      {/* Button below the text */}
      <ThreeDInputComponent position={[0, -0.6, 0]} onSubmit={handleSubmit} />

      {/* <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[1, 0.4, 0.1]} />
        <meshStandardMaterial color="#007bff" />
        <Text
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.06]}
        >
          {buttonLabel}
        </Text>
      </mesh> */}
    </group>
  );
};

export default AnimatedText;
