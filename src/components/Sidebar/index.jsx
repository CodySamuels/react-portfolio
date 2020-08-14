import React from 'react'

export default function Sidebar() {
    return (
        <>
            <div className="sidebar col-sm-1 pt-5 d-flex flex-column align-items-end">
                <a href="https://www.Linkedin.com/in/cody-samuels-1478001aa/"><i class="fab fa-linkedin icons"/></a>
                <a href="https://github.com/CodySamuels" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square icons" /></a>
                <a href="./resume.pdf" target="_blank" rel="noopener noreferrer"><i className="fas fa-user-circle icons"/></a>
            </div>
        </>
    )
}
