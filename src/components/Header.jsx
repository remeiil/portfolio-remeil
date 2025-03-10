import Nav from "./Nav";
import { useState } from "react"

export default function Header(props) {
    const { NavHighlighted, setNavHighlighted  } = props
    return (
        <header>
            <h1>Keiran Hembrow</h1>
            <div className="typewriter"><h3>Searching for employment...</h3></div>
            <p>Keeping the customer experience at the heart of everything.<br/>
            With a strong passion for knowledge and understanding.</p>
            <Nav NavHighlighted={NavHighlighted} setNavHighlighted={setNavHighlighted} />
            <div className="socials">
                <a href="https://github.com/remeiil/" target="_blank"><i className="fa-brands fa-github"></i></a> 
                <a href="https://www.linkedin.com/in/keiran-hembrow-179204114/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                <a href="mailto:paladin@remeil.co.nz"><i className="fa-solid fa-envelope"></i></a>
                <a href="https://www.remeil.co.nz/"><i class="fa-solid fa-house"></i></a>
            </div>
        </header>
    )
}