import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";


export default function Box() {

  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
      {/* <meshStandardMaterial map={colorMap} /> */}
    </mesh>
  );
}
