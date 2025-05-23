import { useState } from "react"
import Summary from "./Summary"
import Experience from "./Experience"
import Projects from "./Projects"
import { experience, project } from "../utils"
import Testimonials from "./Testimonials"

export default function Main(props) {
    const { setNavHighlighted } = props
    return (
        <main>
            <section id="about" onMouseEnter={() => { setNavHighlighted("about") }}>
                <div className="stickyHeader">
                    <h2>About Me</h2>
                </div>
                <p>My experience encompasses website & domain hosting, telecommunications and customer service. My hobbies drive me toward website design and development.</p> 
                <Testimonials />
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