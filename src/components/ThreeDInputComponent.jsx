import React, { useRef, useState } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ThreeDInputComponent = ({ position, onSubmit }) => {
  const inputMeshRef = useRef();
  const submitMeshRef = useRef();
  const [inputValue, setInputValue] = useState("");
  const [hovered, setHovered] = useState(false);

  const handleInputClick = () => {
    const newValue = prompt("Enter text:");
    if (newValue !== null) {
      setInputValue(newValue);
    }
  };

  const handleSubmitClick = () => {
    onSubmit(inputValue);
    setInputValue("");
  };

  useFrame(() => {
    // You can add animations or other frame-based logic here
  });

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
          fontSize={0.2}
          color="#000000"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.06]}
        >
          {inputValue || "Add Wallet"}
        </Text>
      </mesh>

      {/* 3D Submit Button */}
      <mesh
        ref={submitMeshRef}
        position={[position[0], position[1] - 1, position[2]]}
        onClick={handleSubmitClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 0.5, 0.1]} />
        <meshStandardMaterial color={hovered ? "orange" : "blue"} />
        <Text
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          position={[0, 0, 0.06]}
        >
          Submit
        </Text>
      </mesh>
    </>
  );
};

export default ThreeDInputComponent;
