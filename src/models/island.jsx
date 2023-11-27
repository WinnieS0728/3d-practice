/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import Name from "./name";
import { logging } from "@/next.config";

export default function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}) {
  const islandRef = useRef();
  const [showName, setShowName] = useState(true);
  const { nodes, materials } = useGLTF("/3d/island.glb");

  const [nameScale, namePosition, nameRotation] = adjustNameForScreenSize();

  const { gl, viewport } = useThree();
  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(true);

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      lastX.current = clientX;
    },
    [setIsRotating]
  );
  const handlePointerUp = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      setIsRotating(false);
    },
    [setIsRotating]
  );
  const handlePointerMove = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();

      if (isRotating) {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const delta = (clientX - lastX.current) / viewport.width;

        lastX.current = clientX;
        islandRef.current.rotation.y += delta * 0.01 * Math.PI;
        rotationSpeed.current = delta * 0.01 * Math.PI;
      }
    },
    [isRotating, viewport.width]
  );
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "ArrowLeft") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125;
      } else if (e.key === "ArrowRight") {
        if (!isRotating) setIsRotating(true);
        islandRef.current.rotation.y += -0.01 * Math.PI;
        rotationSpeed.current = -0.0125;
      }
    },
    [isRotating, setIsRotating]
  );
  const handleKeyUp = useCallback(
    (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        setIsRotating(false);
      }
    },
    [setIsRotating]
  );

  useEffect(() => {
    const canvas = gl.domElement;

    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [
    gl.domElement,
    handleKeyDown,
    handleKeyUp,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  ]);

  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.35 && normalizedRotation <= 5.95:
          setShowName(false);
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.75 && normalizedRotation <= 1.4:
          setShowName(false);
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.3 && normalizedRotation <= 2.7:
          setShowName(false);
          setCurrentStage(2);
          break;
        case normalizedRotation >= 2.85 && normalizedRotation <= 5.8:
          setShowName(true);
          setCurrentStage(1);
          break;
        default:
          setShowName(false);
          setCurrentStage(null);
      }
    }
  });

  return (
    <>
      <a.group
        ref={islandRef}
        {...props}
      >
        {showName && (
          <Name
            scale={nameScale}
            position={namePosition}
            rotation={nameRotation}
          />
        )}
        <mesh
          geometry={nodes.polySurface944_tree_body_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.polySurface945_tree1_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.polySurface946_tree2_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.polySurface947_tree1_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.polySurface948_tree_body_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.polySurface949_tree_body_0.geometry}
          material={materials.PaletteMaterial001}
        />
        <mesh
          geometry={nodes.pCube11_rocks1_0.geometry}
          material={materials.PaletteMaterial001}
        />
      </a.group>
    </>
  );
}

function adjustNameForScreenSize() {
  let screenScale,
    screenPosition,
    screenRotation = [-29.82, 0, -1.65];

  if (window.innerWidth < 768) {
    screenScale = [0.8, 0.8, 0.8];
    screenPosition = [0, 30, 0];
  } else {
    screenScale = [1, 1, 1];
    screenPosition = [-1, 30, 0];
  }

  return [screenScale, screenPosition, screenRotation];
}
