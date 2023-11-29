"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Loader from "./components/loder";
import Island from "../src/models/island";
import Sky from "../src/models/sky";
import Bird from "../src/models/bird";
import Plane from "../src/models/plane";
import { cn } from "@utils/cn";
import HomeInfo from "./components/home info";
import { Footer } from "./components/footer";
import Name from "@/src/models/name";
import { PresentationControls } from "@react-three/drei";

export default function Home() {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <>
      <main>
        <section className='w-full h-screen absolute inset-0 -z-10'>
          <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
            {currentStage && <HomeInfo currentState={currentStage} />}
          </div>
          <Canvas
            className={cn("w-full h-full cursor-grab", {
              "cursor-grabbing": isRotating,
            })}
            camera={{
              near: 0.1,
              far: 1000,
            }}
          >
            <Suspense fallback={<Loader />}>
              <directionalLight
                position={[1, 1, 1]}
                intensity={2}
              />
              <ambientLight intensity={0.5} />
              <hemisphereLight
                skyColor='#b1e1ff'
                groundColor='#000'
                intensity={0.1}
              />

              <Sky isRotating={isRotating} />
              <Scene setCurrentStage={setCurrentStage} />
              <Bird />
              <Plane isRotating={isRotating} />
            </Suspense>
          </Canvas>
        </section>
      </main>
      <Footer className={"absolute bottom-0"} />
    </>
  );
}

const Scene = ({ setCurrentStage }) => {
  const islandRef = useRef();
  const [showName, setShowName] = useState(false);
  useFrame(() => {
    const rotationY = Math.abs(
      (islandRef.current.parent.rotation.y - 6.25) % 6.25
    );
    switch (true) {
      case rotationY < 1.8 || 5.6 < rotationY:
        setCurrentStage(1);
        setShowName(true);
        break;
      case 2 < rotationY && rotationY < 2.3:
        setCurrentStage(2);
        setShowName(false);
        break;
      case 3.4 < rotationY && rotationY < 3.75:
        setCurrentStage(3);
        setShowName(false);
        break;
      case 5 < rotationY && rotationY < 5.4:
        setCurrentStage(4);
        setShowName(false);
        break;
      default:
        setCurrentStage(null);
        setShowName(false);
        break;
    }
  });

  return (
    <>
      <PresentationControls polar={[0, 0]}>
        <group
          position={[0, -0.3, 0]}
          ref={islandRef}
        >
          <Island />
          <Name />
        </group>
      </PresentationControls>
    </>
  );
};
