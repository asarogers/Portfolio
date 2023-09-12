import WaveText from "./WaveText";

export default function Skills({ theme }) {
    return (
        <section id="skills" className="skills">

            <ul>
                <h1><WaveText text={"Programming"} theme={theme} /></h1>
                <li>C/C++/C#</li>
                <li>Java</li>
                <li>PHP</li>
                <li>JavaScript /Node.js</li>
                <li>Python</li>
                <li>Kotlin</li>
                <li>Markdown</li>
                <li>PowerShell / BASH</li>
                <li>VBA</li>
            </ul>
            <ul>
                <h1><WaveText text={"Operating System"} theme={theme} /></h1>
                <li>Windows</li>
                <li>Ubuntu Linux</li>
                <li>MacOS</li>
                <li>ROS</li>
                <li>FreeRTOS</li>
            </ul>
            <ul>
                <h1><WaveText text={"Database"} theme={theme} /></h1>
                <li>MYSQL</li>
                <li>Mongo</li>
                <li>SQLite</li>
                <li>Postgres</li>
                <li>Oracle</li>
                <li>Azure</li>
                <li>AWS</li>
                <li>GCP</li>
            </ul>
            <ul>
                <h1><WaveText text={"Software"} theme={theme} /></h1>
                <li>Android Studio</li>
                <li>RESTful API</li>
                <li>NetBeans</li>
                <li>Access & Excel</li>
                <li>Angular</li>
                <li>Figma</li>
                <li>React</li>
            </ul>
        </section>
    )
}

