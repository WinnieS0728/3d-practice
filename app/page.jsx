"use client";
import Name from "@/src/models/name";
import { Html, PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { cn } from "@utils/cn";
import { Suspense, useRef, useState } from "react";
import Bird from "../src/models/bird";
import Island from "../src/models/island";
import Plane from "../src/models/plane";
import Sky from "../src/models/sky";
import HomeInfo from "./components/home info";
import Loader from "./components/loder";
import { DragArrow } from "@assets/icons";

export default function Home() {
  const [currentStage, setCurrentStage] = useState(1);

  return (
    <>
      <main>
        <section className='w-full h-screen absolute inset-0 -z-10'>
          <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
            {currentStage && <HomeInfo currentState={currentStage} />}
          </div>
          <Canvas
            className={cn("w-full h-full cursor-grab")}
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

              <Sky />
              <Scene setCurrentStage={setCurrentStage} />
              <Bird />
              <Plane />
              <Html position={[-0.7, -3.2, 0]}>
                <div className='flex gap-2 justify-center items-center'>
                  <p className='whitespace-nowrap'>drag to visit my island</p>
                  <DragArrow />
                </div>
              </Html>
            </Suspense>
          </Canvas>
        </section>
      </main>
    </>
  );
}

const Scene = ({ setCurrentStage }) => {
  const islandRef = useRef();

  useFrame(() => {
    const rotationY = Math.abs(
      (islandRef.current.parent.rotation.y - 6.25) % 6.25
    );
    switch (true) {
      case rotationY < 1.8 || 5.6 < rotationY:
        setCurrentStage(1);
        break;
      case 2 < rotationY && rotationY < 2.3:
        setCurrentStage(2);
        break;
      case 3.4 < rotationY && rotationY < 3.75:
        setCurrentStage(3);
        break;
      case 5 < rotationY && rotationY < 5.4:
        setCurrentStage(4);
        break;
      default:
        setCurrentStage(null);
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
