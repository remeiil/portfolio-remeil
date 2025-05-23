import Nav from "./Nav";
import { useState } from "react"
import Testimonials from "./Testimonials";

export default function Header(props) {
    const { NavHighlighted, setNavHighlighted  } = props
    return (
        <header>
            <h1>Keiran Hembrow</h1>
            <div className="typewriter"><h3>Always Learning...</h3></div>
            <h5>Currently React, will be looking at C# next.</h5>

            <Nav NavHighlighted={NavHighlighted} setNavHighlighted={setNavHighlighted} />

            <div className="socials">
                <a href="https://www.remeil.co.nz/"><i className="fa-solid fa-house"></i></a>
                <a href="https://github.com/remeiil/" target="_blank"><i className="fa-brands fa-github"></i></a> 
                <a href="https://www.linkedin.com/in/keiran-hembrow-179204114/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:paladin@remeil.co.nz"><i className="fa-solid fa-envelope"></i></a>
                <a className="externalLink" href="KeiranHembrowCV2025.pdf" target="_blank"> <i className="fa-solid fa-file-pdf">CV</i></a>
            </div>
                    
        </header>
    )
}