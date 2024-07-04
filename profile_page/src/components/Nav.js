import React from "react";
import "./css/nav.css"
import lg from "../image/logo.png"

export default function Nav(){
    return (
        <nav className="navbar">
            <img src={lg} alt="project-logo" className="i-logo"></img>
            <h3 className="title">Welcome to creative Webpage Design</h3>
        </nav>
    )
}