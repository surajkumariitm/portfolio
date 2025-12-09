import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Box, MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

const Cube = () => {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.2;
    mesh.current.rotation.y += delta * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Box ref={mesh} args={[2.5, 2.5, 2.5]}>
        <MeshWobbleMaterial
          attach="material"
          color="#915EFF"
          factor={0.6}
          speed={1}
          roughness={0}
          metalness={0.5}
        />
      </Box>
    </Float>
  );
};

const ProfileCube = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Cube />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={5} />
    </Canvas>
  );
};

export default ProfileCube;
