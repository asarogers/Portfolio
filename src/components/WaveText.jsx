import React, { useState, useEffect } from 'react';
import { useTrail, animated } from 'react-spring';


const WaveText = ({ text, theme }) => {
  const textArray = text.split('');


  const [hovered, setHovered] = useState(false);


  useEffect(() => {
    if (hovered) {
        const interval = setInterval(() => {
          setHovered(false); // Reset hovered state to trigger animation again
        }, 2000); // 2 seconds
  
        return () => {
          clearInterval(interval);
        };
      }

    if (!hovered) {
      const interval = setInterval(() => {
        setHovered(true); // Trigger animation every 20 seconds
      }, 10 *1000); // 10 seconds

      return () => {
        clearInterval(interval);
      };
    }
  }, [hovered]);


  var trail = useTrail(textArray.length, {
    from: { color: "black", opacity: 1 },
    to: { color: hovered ? "black" : "white", opacity: 1 },
    delay: 1,
  });


  return (
    <div
      className={`wave-text ${hovered ? 'silver-text' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {trail.map((props, index) => (
        <animated.span key={index} className="wave-letter" id= {`${theme}`} style={props}>
          {textArray[index]}
        </animated.span>
      ))}
    </div>
  );
};

export default WaveText;