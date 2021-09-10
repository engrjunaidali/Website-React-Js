import React from 'react'
import "./navbar.css";
import {Route, BrowserRouter as Router,Link} from "react-router-dom";

function navbar() {
    return (
        <div>
            <div className="navbar-container">
                <div className="header-title">
                    <h1>Junaid Ali</h1>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                        <li><Link to="/services">SERVICES</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/careers">CAREERS</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar
