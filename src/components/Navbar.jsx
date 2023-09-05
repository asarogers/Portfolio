import { Switch } from "@mui/material"
import ReactSwitch from "react-switch"
import WaveText from "./WaveText"




export default function Navbar(props) {
    const { theme, setTheme, toggleTheme } = (props)

    function checkTheme(theme) {
        theme === "light" ? "black" : "white"
    }

    function scrollToTop() {
        const targetElement = document.getElementById('canva');
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    function scrollToBottom() {
        const targetElement = document.getElementById('skills');
        targetElement.scrollIntoView({ behavior: 'smooth' });
        console.log("clicked")
    }


    return (
        <div className="navbar" id={theme} 
        >
            <div className="switch-container">
                <WaveText text={"Archive"} theme={theme} />
                <div onClick={() => {
                    scrollToBottom();
                }}>
                    <WaveText text={"Skills"} theme={theme} />

                </div>

                <div className="switch">
                    ☀️
                    <Switch
                        checked={theme === "dark"}
                        onChange={toggleTheme}
                    />
                    🌒
                </div>
            </div>
            <div className="name" onClick={() => {
            scrollToTop();
        }}>
                <WaveText text={"Asa Rogers"} theme={theme} />
            </div>
        </div>
    )
}