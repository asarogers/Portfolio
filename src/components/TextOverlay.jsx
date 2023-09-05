import React from 'react';
import Typewriter from 'typewriter-effect';


function TextOverlay() {

  return (
    <div className="text-overlay" >
      <Typewriter
        options={{
          strings: [
            "Hello, world! 👋🏽<br>Name's Asa Rogers, I go by Ace", "I am a Software Engineer. <br> I graduated from A&M with a Bachelor's degree <br> in Computer Science, concentration in Cybersecurity"
        ],
          autoStart: true,
          loop: true,
          delay: 1
        }}
      />
    </div>
  );
}

export default TextOverlay;
