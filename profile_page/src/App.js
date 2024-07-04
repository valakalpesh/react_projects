import React from "react";
import Nav from "./components/Nav";
import Card from "./components/Card";
import "./App.css"
export default function App(){
  return (
    <div>
        <Nav />
        <h1 className="team">About Us</h1>
        <div className="card-container">
          <Card />
          <Card />
          <Card />
        </div>
    </div>
  )
}