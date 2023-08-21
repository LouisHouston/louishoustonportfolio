import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import "./navbar.css";


function Navbar() {
    return (
        <div className="container">
            <nav className="navbar fixed-top bg-dark position- top-0">
                <div class="github">
                    <a className="navbar-brand" href="https://github.com/LouisHouston" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} className="fa-2xl"></FontAwesomeIcon>
                    </a>
                    </div>
                    <div class="linkedin">
                    <a class="navbar-brand style" href="https://www.linkedin.com/in/louis-houston-b70aa718a/ " target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-2xl"></FontAwesomeIcon>
               </a>
               </div>
                    <a class="navbar-brand style" href=" #">Welcome!</a>
            </nav>
        </div>
    );

}

export default Navbar;
