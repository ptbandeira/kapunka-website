import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Icosahedron } from "@react-three/drei";

function AnimatedIcosahedron() {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.003;
  });
  return (
    <Icosahedron
      ref={mesh}
      args={[2, 0]}
      material-toneMapped={false}
    >
      <meshStandardMaterial
        attach="material"
        color="#B89D62"
        roughness={0.4}
        metalness={0.7}
      />
    </Icosahedron>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <AnimatedIcosahedron />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
