import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Plane({ isRotating, ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF("/3d/plane.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    actions["Take 001"].play();
  }, [actions]);

  return (
    <mesh
      {...props}
      ref={ref}
      position={[0, 0.18, 3]}
      rotation={[0, 1.2, 0]}
    >
      <primitive object={scene} />
    </mesh>
  );
}
