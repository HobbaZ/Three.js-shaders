"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Loader,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import Lights from "./Lights";

export default function Scene() {
  return (
    <>
      <Canvas
        shadows
        gl={{
          antialias: true,
          pixelRatio:
            typeof window !== "undefined" ? window.devicePixelRatio : 1,
        }}
        style={{ height: "100vh", width: "100%" }}
      >
        <Suspense fallback={null}>
          <PerspectiveCamera />
          <Environment preset="night" />
          <Lights />
          <Model />
          <OrbitControls />
        </Suspense>
      </Canvas>
      {console.log("Scene loaded")}
      <Loader />
    </>
  );
}
