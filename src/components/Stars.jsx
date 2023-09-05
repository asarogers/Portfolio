import { useState, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
    const star = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));//makes 5k stars
    const {mouse} = useThree(); //mouse coordinates
  
    useFrame((state, delta) => {
        star.current.rotation.x -= delta / 10; //
        star.current.rotation.y -= delta / 15;

        star.current.position.x = mouse.x/15;
        star.current.position.y = mouse.y/15;
    });
  
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={star} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color='#f272c8'
            size={0.002}
            sizeAttenuation={true}
            depthWrite={false}
          />
        </Points>
      </group>
    );
  };
  export default Stars;