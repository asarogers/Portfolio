import {Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import { Preload, OrbitControls, Text } from "@react-three/drei";
import React, { useEffect, useState } from 'react';
import InfinitySign from "./InfinitySign.jsx";
import Stars from "./Stars.jsx";
import Typewriter from "typewriter-effect";
import TextOverlay from './TextOverlay';



const CanvaView = ({ modelPath}) => {
  const scale = .025;
  return (
    <div className='stars' style={{ position: 'relative'}}>
      <Canvas camera={{ position: [0, 0, 1] }}>
      
        <Suspense fallback={null}>
          <Stars />
          <ambientLight />
          <spotLight position={[0, 10, 10]} intensity={150} />
          <pointLight position={[-3, 20, 0]} intensity={200} />
          <OrbitControls autoRotate={true} maxPolarAngle={Math.PI / 2} enableZoom={false} />
          <InfinitySign modelPath={modelPath} scale={scale}/>
        </Suspense>
        <Preload all />
      </Canvas>
      <TextOverlay/>
    </div>
  );
};

export default CanvaView;