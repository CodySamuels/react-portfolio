import React from 'react'
import { Link } from "react-router-dom";
import About from '../../pages/About/'
import Contact from '../../pages/Contact/'
import Portfolio from '../../pages/Portfolio/'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top pr-1">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsible-navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <nav className="collapse navbar-collapse d-flex-inline flex-row-reverse" id="collapsible-navbar">

                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link" to={About}>About</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Portfolio}>Portfolio</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={Contact}>Contact</Link></li>
                    </ul>

                </nav>

            </nav>
        </>
    )
}
