"use client";

import testVertexShader from "./shaders/test/vertex.glsl";
import testFragmentShader from "./shaders/test/fragment.glsl";
import { useRef } from "react";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";

//Code modified from shaderMaterial tutorial at https://drei.docs.pmnd.rs/shaders/shader-material and https://threejs-journey.com/lessons/shaders#matrices-uniforms

// Define the custom shader material
const CustomMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color(0.5, 1.0, 1.0),
  },
  testVertexShader,
  testFragmentShader
);

// Extend the material to be used as a JSX component
extend({ CustomMaterial });

export default function Model() {
  const meshRef = useRef();

  // Updates shader material time
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[10, 10, 10, 10]} />{" "}
      {/*last 2 args split the plane into the number of segments*/}
      <customMaterial color="hotpink" time={1} key={CustomMaterial.key} />
    </mesh>
  );
}
