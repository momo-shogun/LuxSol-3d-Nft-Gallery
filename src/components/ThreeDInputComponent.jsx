import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ThreeDInputComponent = ({ position, onSubmit }) => {
  const inputMeshRef = useRef();
  const [inputValue, setInputValue] = useState(
    "EV3pbMjq1bGN83Cjmw8uGpJQPfZtSZTphti6NNLNDkzo",
  );
  const [hovered, setHovered] = useState(false);

  const handleInputClick = () => {
    const newValue = prompt("Enter wallet Adress");
    if (newValue !== null) {
      setInputValue(newValue);
    }
  };

  const handleSubmitClick = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <>
      {/* 3D Input Box */}
      <mesh
        ref={inputMeshRef}
        position={position}
        onClick={handleInputClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1.5, 0.5, 0.1]} />
        <meshStandardMaterial color={hovered ? "yellow" : "lightgrey"} />
        <Text
          fontSize={0.053}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.06]}
        >
          {inputValue || "Add Wallet"}
        </Text>
      </mesh>
    </>
  );
};

export default ThreeDInputComponent;
