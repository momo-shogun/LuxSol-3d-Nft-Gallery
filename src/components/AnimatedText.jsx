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
        color="#CDC2A5"
        anchorX="center"
        anchorY="middle"
        position={[-1.6, 0.45, -1.145]}
        smooth={1}
        letterSpacing={-0.025}
      >
        {text}
      </Text>

      {/* Button below the text */}
      <ThreeDInputComponent
        position={[0, 0.45, -1.5]}
        onSubmit={handleSubmit}
      />
    </group>
  );
};

export default AnimatedText;
