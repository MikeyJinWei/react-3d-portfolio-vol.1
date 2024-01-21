import { Suspense, useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';

import LostRobot from '../models/LostRobot';

import Bird from '../models/Bird';
import Plane from '../models/Plane';
import HomeInfo from '../components/HomeInfo';
import homeBgm from '../assets/shadow.m4a';
import { soundoff, soundon } from '../assets/icons';

const Home = () => {
  const audioRef = useRef(new Audio(homeBgm));
  audioRef.current.volume = 0.1;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  // adjust Island
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43];
    }

    return [screenScale, screenPosition, rotation];
  };

  // adjust LostRobot
  const adjustLostRobotForScreenSize = () => {
    let screenScale = null;
    let screenPosition;
    let rotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, -25, -40];
    } else {
      screenScale = [0.4, 0.4, 0.4];
      screenPosition = [0, -30, -40];
    }

    return [screenScale, screenPosition, rotation];
  };

  // adjust Plane
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  const [lostRobotScale, lostRobotPosition, lostRobotRotation] =
    adjustLostRobotForScreenSize();

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute bottom-20 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo currentStage={currentStage} />
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />

          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />
          {/* <Bird /> */}
          {/* <Sky isRotating={isRotating} /> */}
          {/* <Island
            scale={islandScale}
            position={islandPosition}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          /> */}
          <LostRobot
            scale={lostRobotScale}
            position={lostRobotPosition}
            rotation={lostRobotRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          {/* <Plane
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
            isRotating={isRotating}
          /> */}
        </Suspense>
      </Canvas>
      {/* <section className='bg-white h-96' /> */}
      <div className='absolute bottom-2 left-2'>
        <img
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
