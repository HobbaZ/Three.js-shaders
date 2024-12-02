"use client";

import { testVertexShader } from "./shaders/test/vertex.js";
import { testFragmentShader } from "./shaders/test/fragment.js";

export default function Model() {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[50, 50]} />
        <rawShaderMaterial
          vertexShader={testVertexShader}
          fragmentShader={testFragmentShader}
        />
      </mesh>
      {console.log("model loaded")}
    </>
  );
}
