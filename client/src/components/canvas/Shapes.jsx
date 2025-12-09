import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimatedSphere = (props) => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#804dee"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </Float>
  );
};

const ShapesCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 1]} />
      <AnimatedSphere />
    </Canvas>
  );
};

export default ShapesCanvas;
