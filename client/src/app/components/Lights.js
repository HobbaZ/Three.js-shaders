"use client";

export default function Lights() {
  return (
    <>
      <ambientLight position={[0, 4, 0]} intensity={0.3} />

      <directionalLight intensity={1} position={[0, 10, 0]} color={0xffcc77} />

      <pointLight intensity={1} position={[6, 3, 6]} color={0xffcc77} />

      {console.log("lights loaded")}
    </>
  );
}
