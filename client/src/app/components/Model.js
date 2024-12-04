"use client";

import testVertexShader from "./shaders/test/vertex.glsl";
import testFragmentShader from "./shaders/test/fragment.glsl";

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
