import React from 'react';
import './css/footer.css';

export default function Footer() {
    return (
        <div className="ftr">
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={require('../image/twitter.png')} alt="Twitter" />
            </a>
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={require('../image/facebook.png')} alt="Facebook" />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={require('../image/instagram.png')} alt="Instagram" />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <img src={require('../image/github.png')} alt="GitHub" />
            </a>
        </div>
    );
}
