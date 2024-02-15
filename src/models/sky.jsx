import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sky() {
  const { scene } = useGLTF("/3d/sky.glb");

  const skyRef = useRef();

  useFrame((_, delta) => {
    skyRef.current.rotation.y += 0.05 * delta;
  });
  return (
    <mesh ref={skyRef}>
      <primitive object={scene} />
    </mesh>
  );
}
