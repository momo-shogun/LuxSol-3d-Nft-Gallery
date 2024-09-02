import React from "react";

const Wall = ({ position, rotation }) => {
  return (
    <mesh position={position} rotation={rotation}>
      <planeBufferGeometry args={[10, 5]} />
      <meshStandardMaterial color="#FEFAE0" />
    </mesh>
  );
};

export default Wall;
