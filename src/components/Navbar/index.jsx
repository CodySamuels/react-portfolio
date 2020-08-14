import React from 'react'
import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top pr-1">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav className="collapse navbar-collapse d-flex-inline flex-row-reverse" id="collapsible-navbar">

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to={'/about'}>About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/portfolio'>Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to='/contact'>Contact</Link></li>
                    </ul>

                </nav>

            </nav>
        </>
    )
}
