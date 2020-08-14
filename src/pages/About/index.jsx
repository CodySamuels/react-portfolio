import React from 'react'
import Cody from '../../assets/images/methumbnail.jpg'
import Sidebar from '../../components/Sidebar/'
import Container from '../../components/Container/'

export default function about() {
    return (
        <>
            <main className="container-fluid my-3">
                <div className="row">
                    <div className="col-sm-1"/>
                    <div className="col-sm-10 rounded my-5 py-3 px-4 book-effect">
                        <h1 className="header-font">About Me</h1>
                        <img className="pr-2 mr-2 float-left w-auto h-auto" src={Cody} alt="Cody Samuels" />
                        <p />I am a full stack developer located in beautiful Seattle. I'm constantly pushing myself to do more, and be better. My background in psychology empowers me to create intuitive and sleep applications.
                    </div>

                    <Sidebar />
                </div>
            </main>
        </>
    )
}
