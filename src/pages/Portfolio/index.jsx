import React from 'react'

export default function index() {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10 rounded my-5 py-3 px-4 book-effect">

                        <h1 className="header-font">Portfolio</h1>


                        {/* <div className="container-fluid"> */}

                        <div className="card-deck">

                            <div className="row">

                                <div className="card">
                                    <a href="https://codysamuels.github.io/wander/"><img className="card-img-top" src="./assets/wander.png" alt="First Portfolio" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Wander</h5>
                                        <p className="card-text">Wander is a sleek app that helps the user select a hike out of a curated list.</p>
                                        <a className href="https://github.com/CodySamuels/wander"><i className="fab fa-github d-flex justify-content-end align-items-end" /></a>
                                    </div>
                                </div>

                                <div className="card">
                                    <a href="https://codysamuels.github.io/weather-dashboard/"><img className="card-img-top" src="./assets/weather-dashboard.png" alt="First Portfolio" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Weather For You and Me</h5>
                                        <p className="card-text">Weather For You and Me is a sleek and intuitive weather application with multiple city support.</p>
                                        <a href="https://github.com/CodySamuels/weather-dashboard/"><i className="fab fa-github d-flex justify-content-end align-items-end" /></a>

                                    </div>
                                </div>

                                <div className="card">
                                    <a href="https://codysamuels.github.io/daily-planner/"><img className="card-img-top" src="./assets/daily-planner.png" alt="First Portfolio" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Daily Planner</h5>
                                        <p className="card-text">Daily Planner is a simple and intuitive time management app.</p>
                                        <a href="https://github.com/CodySamuels/daily-planner/"><i className="fab fa-github d-flex justify-content-end align-items-end" /></a>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                                <div className="card">
                                    <a href="https://purecloudone.herokuapp.com/"><img className="card-img-top" src="./assets/pure-cloud.png" alt="First Portfolio" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">PureCloud Electronics</h5>
                                        <p className="card-text">PureCloud is a digital storefront template. I wanted to experiment with stripe integration and possibly develop a storefront for potential freelance work.</p>
                                        <a href="https://github.com/zackdeacon/Prime_Suspects"><i className="fab fa-github d-flex justify-content-end align-items-end" /></a>
                                    </div>
                                </div>


                                <div className="card">
                                    <a href="https://radiant-crag-31130.herokuapp.com/"><img className="card-img-top" src="./assets/notetaker.png" alt="First Portfolio" /></a>
                                    <div className="card-body">
                                        <h5 className="card-title">Note Taker</h5>
                                        <p className="card-text">This is basic, but functional note taking application</p>
                                        <a href="https://github.com/CodySamuels/note-taker/"><i className="fab fa-github d-flex justify-content-end align-items-end" /></a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>


        </main>
        </>
    )
}
