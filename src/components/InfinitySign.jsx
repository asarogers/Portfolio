import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


const InfinitySign = ({ modelPath, scale }) => {
  const ref = useRef(); //reference to the object on the screen
  const gltf = useLoader(GLTFLoader, modelPath); //loads t
  const [hovered, hover] = useState(false);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.01;
  });
  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={hovered ? scale * 1.2 : scale}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}
      />
      
    </>
  );
};

export default InfinitySign;