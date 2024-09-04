import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import InteractiveCube from "./components/InteractiveCube";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import NFTFrame from "./components/NftFrame";
import "./App.css";
import image1 from "./assets/image2.png";
import image2 from "./assets/image3.png";
import Window from "./components/Window";
import Wall from "./components/Wall";
import AnimatedText from "./components/AnimatedText";
import { useState, useEffect } from "react";
// Ensure this path is correct
// import photo from "./assets/photo.png"; // Comment this line if not used

// Extend the necessary geometries
extend({
  BoxBufferGeometry: THREE.BoxGeometry,
  PlaneBufferGeometry: THREE.PlaneGeometry,
});

function App() {
  /* const [nfts, setNfts] = useState([]);
  const walletAddress = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"; // Replace with the desired wallet address

  useEffect(() => {
    const loadNFTs = async () => {
      const nftData = await fetchNFTs(walletAddress);
      setNfts(nftData);
    };

    loadNFTs();
  }, []); */

  return (
    <div className="w-full h-screen bg-black">
      <Canvas
        camera={{
          position: [5, 2, 5],
          fov: 75,
          aspect: window.innerWidth / window.innerHeight,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={1} />

        {/* Floor */}
        <mesh
          receiveShadow
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeBufferGeometry args={[10, 10]} />
          <meshStandardMaterial color="lightgray" />
        </mesh>

        {/* Walls with Single Color */}
        <Wall position={[0, 0, -5]} color="#D8A25E" />
        <Wall position={[0, 0, 5]} rotation={[0, Math.PI, 0]} />
        <Wall position={[-5, 0, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Wall position={[5, 0, 0]} rotation={[0, -Math.PI / 2, 0]} />

        {/* Roof */}

        <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeBufferGeometry args={[10, 10]} />
          <meshStandardMaterial color="white" />
        </mesh>

        {/* Windows with starry background */}
        <Window position={[-2.6, 1, -4.99]} rotation={[0, 0, 0]} />
        <Window position={[-4.99, 1, 0]} rotation={[0, Math.PI / 2, 0]} />
        <Window position={[0, 1, 4.99]} rotation={[0, Math.PI, 0]} />
        <Window position={[4.99, 1, 0]} rotation={[0, -Math.PI / 2, 0]} />

        {/* Add the AnimatedText component at the center of the floor */}
        <AnimatedText text="Welcome!" buttonLabel="Click Me" />

        {/* Interactive Objects */}
        <InteractiveCube position={[-1, 0, -1]} />

        {/* NFT Frames */}
        <NFTFrame position={[1, 0.75, -5.0]} url={image2} />
        <NFTFrame position={[3.5, 0.75, -5.0]} url={image1} />

        {/* OrbitControls */}
        <OrbitControls
          enableZoom={true} // Enable zooming
          enableRotate={true} // Enable rotating
          enablePan={false} // Allow panning
          // Constraints to keep the camera within the room
          minPolarAngle={Math.PI / 2} // Adjust the angle to allow slight up/down tilt, keeping it within the room
          maxPolarAngle={Math.PI / 1.8} // Similar adjustment to restrict movement within the room
          minDistance={2.8} // Minimum zoom distance to prevent going too close to the walls
          maxDistance={6} // Maximum zoom distance to prevent going outside the walls
          minAzimuthAngle={-Math.PI / 2} // Restrict horizontal rotation
          maxAzimuthAngle={Math.PI / 2} // Restrict horizontal rotation
          target={[0, 1, 0]} // Set the target to the center of the room
        />
      </Canvas>
    </div>
  );
}

export default App;
