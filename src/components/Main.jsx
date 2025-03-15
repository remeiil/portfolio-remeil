import { useState } from "react"
import Summary from "./Summary"
import Experience from "./Experience"
import Projects from "./Projects"
import { experience, project } from "../utils"

export default function Main(props) {
    const { setNavHighlighted } = props
    
    let today = new Date().getDate()
    return (
        <main>
            <section id="about" onMouseEnter={() => { setNavHighlighted("about") }}>
                <div className="stickyHeader">
                    <h2>About Me</h2>
                </div>
                <p>I am <abbr title={'I am still looking for employment as of ' + today + ' March'} className="highlight">available for an immediate start</abbr>. I am seeking employment that will put my skills to the test whilst also expanding my knowledge and experience.</p> 
            </section>
            <section id="summary" className="summary" onMouseEnter={() => { setNavHighlighted("summary") }}>
                <Summary experience={experience} />
            </section>
            <section id="experience" onMouseEnter={() => { setNavHighlighted("experience") }}>
                <Experience experience={experience} />
            </section>
            <section id="projects" onMouseEnter={() => { setNavHighlighted("projects") }}>
                <Projects project={project} />
            </section>
        </main>
    )
}