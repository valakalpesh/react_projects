import React from "react";
import "./css/info.css";
import empimage from "../image/boy.png";

export default function Info() {
    return (
        <div>
            <img src={empimage} alt="employee-passport-size" className="card-img" />
            <div className="d-con">
                <h2 className="dev-name">Kalpesh Vala</h2>
                <p className="p1">Frontend Developer</p>
                <p className="p2">Creative Website</p>
            </div>
            <div className="button-p">
                <a href="https://www.gmail.com" className="mail-link" target="_blank" rel="noopener noreferrer">
                    <img src={require('../image/email.png')} alt="mailbox" className="i-mail" />
                    Email
                </a>
                <a href="https://www.linkedin.com/in/kalpeshvala/" className="linkedln-link" target="_blank" rel="noopener noreferrer">
                    <img src={require('../image/linkedin.png')} alt="linkedin" className="i-linke" />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
