import './App.css'
import { useState } from 'react';
import { Flip, Fade, Zoom, Roll } from 'react-reveal';
import Navbar from './components/Navbar';
import MediaPlayer from "./components/MediaPlayer.jsx"
import flange from "./assets/videos/flange.mp4"
import client from "./assets/videos/client.mp4"
import dashboard from "./assets/videos/dashboard.mp4"
import mongoTester from "./assets/videos/mongoTester.mp4"
import CanvaView from './components/CanvaView';
import WaveText from './components/WaveText';
import Skills from './components/Skills';

function App() {
  const [theme, setTheme] = useState("dark");
  //changes the 
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  //const goTopBtn = document.getElementsByClassName("name");
  //  console.log(goTopBtn)

  return (
    <body id={theme} className='body'>
      <div className="contianer" id="contianer">
        <Navbar theme={theme} setTheme={setTheme} toggleTheme={toggleTheme} />
        <section className='card canva' id="canva">
          <CanvaView modelPath={"./models/infinitySilver.glb"} />
        </section>
        <section className='card' id="card">
          <div className='fadeContainer'>
            <Fade top><MediaPlayer id={theme} video={flange} /></Fade>
          </div>
          <Zoom top>
            <div>
              <div class="problem-title">
                <WaveText text={"Flange Layout"} theme={theme} />
              </div>
              <div class="problem-description" id={theme}>The original Flange Layout Form broke,  so users requested a replacement identical to the previous one. With a few minor changes,  this site went on to save the Layout Planner 2 hours per day  </div>
            </div>
          </Zoom>
        </section>
        <section className='card'>
          <div className='fadeContainer'>
            <Flip right ><MediaPlayer id={theme} video={dashboard} /></Flip>
          </div>
          <Flip right>
            <div>
              <div class="problem-title">
                <WaveText text={"Remote Dashboard"} theme={theme} />
              </div>
              <div class="problem-description" id={theme}>Supervisors needed a way to view the site's performance before their shift. This site we made to support that need.  It captures the data from each machine,  calculates the performance, and displays it to the screen.   </div>
            </div>
          </Flip>
        </section>
        <section className='card' >
          <div className='fadeContainer'>
            <Zoom left ><MediaPlayer id={theme} video={mongoTester} /></Zoom>
          </div>
          <Zoom right>
            <div>
              <div class="problem-title">
                <WaveText text={"Point Tracker"} theme={theme} />
              </div>
              <div class="problem-description" id={theme}>HR tracks if a employee calls in, does not show up, or is late for work. Depending on the case, the employee will recieve points. 71+ points and they are terminated. In the past, HR would track this by hand. This site improved the Point Tracking process by digitizing the process   </div>
            </div>
          </Zoom>
        </section>
        <section className='card' >
          <div className='fadeContainer'>
            <Roll left><MediaPlayer id={theme} video={client} /></Roll >
          </div>
          <Roll up>
            <div>
              <div class="problem-title">
                <WaveText text={"Client Website"} theme={theme} />
              </div>
              <div class="problem-description" id={theme}>Client requested an ecommerce's website. The task was to capture all information from their physical brochure and create a website from it. The site need login, contact, buy, and save functionaliy</div>
            </div>
          </Roll >
        </section>
        < Skills theme={theme} />
      </div>
    </body>
  )
}

export default App