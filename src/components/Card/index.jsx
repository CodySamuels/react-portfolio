import React from 'react'

export default function index(props) {
    return (
        <>
            <div className="card mt-2">
                <a href={props.deployed}><img className="card-img-top" src={props.img} alt="First Portfolio" /></a>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <a className href={props.github}><i className="fab fa-github d-flex justify-content-end align-items-end" /></a>
                </div>
            </div>
        </>
    )
}
