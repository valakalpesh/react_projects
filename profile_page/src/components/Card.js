import React from "react";
import Info from "./Info";
import About from "./About";
import Inter from "./Interest";
import Footer from "./Footer";
import "./css/card.css"
export default function Card(){
    return(
        <div className="card">
            <Info />
            <About />
            <Inter />
            <Footer />
        </div>
    )
}