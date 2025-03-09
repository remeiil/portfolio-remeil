import { useState } from "react"

export default function Nav(props) {
    const { NavHighlighted, setNavHighlighted } = props
    const navState = NavHighlighted
    
    const navNames = ["about", "summary", "experience", "projects"]
    const navMenu = navNames.map((navItem, navKey) => <a href={ "#" + navItem} className={navState === navItem ? "activeNav" : " "} onClick={() => {setNavHighlighted(navItem)}} key={navKey}><span className={navState === navItem ? "longHrSpan" : "hrSpan"}></span>{navItem === "summary" ? "Employment " : ""}{navItem.charAt(0).toUpperCase() + navItem.slice(1)}</a>)
    
    return (
        <nav>
            {navMenu}
        </nav>
    )
}