import React from 'react'
import { Link } from "react-router-dom";

export default function about() {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-10 rounded my-5 py-3 px-4 book-effect">
                        <h1 className="header-font">About Me</h1>
                        <img className="pr-2 mr-2 float-left w-auto h-auto" src="./assets/methumbnail.jpg" alt="Picture of Cody Samuels"/>
                            <p />I am a full stack developer located in beautiful Seattle. I'm constantly pushing myself to do more, and be better. My background in psychology empowers me to create intuitive and sleep applications.
                    </div>
                        <div className="sidebar" id="sidebarDiv">

                            <Link className="fab fa-Linkedin icons" to="https://www.Linkedin.com/in/cody-samuels-1478001aa/" target="_blank" rel="noopener noreferrer"></Link>

                            <Link className="fab fa-github-square icons" to="https://github.com/CodySamuels" target="_blank" rel="noopener noreferrer"></Link>

                            <Link className="fas fa-user-circle icons" to="./resume.pdf" target="_blank" rel="noopener noreferrer"></Link>

                        </div>
                    </div>
            </main>  
        </>
    )
}
