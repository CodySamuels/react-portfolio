import React from 'react'
import Sidebar from '../../components/Sidebar/'
import Card from '../../components/Card/'
import Wander from '../../assets/images/wander.png'
import WeatherForMeAndYou from '../../assets/images/weather-dashboard.png'
import DailyPlanner from '../../assets/images/daily-planner.png'
import PureCloud from '../../assets/images/pure-cloud.png'
import BurgerLogger from '../../assets/images/burgerlogger.png'
import NoteTaker from '../../assets/images/notetaker.png'


export default function index() {
    return (
        <>
            <main className="container-fluid">
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10 rounded my-5 py-3 px-4 book-effect">

                        <h1 className="header-font">Portfolio</h1>

                        <div className="card-deck">

                            <div className="row">

                                <Card deployed='https://codysamuels.github.io/wander' img={Wander} title="Wander" description='Wander is a sleek app that helps the user select a hike out of a curated list.' github='https://github.com/CodySamuels/wander' />
                                <Card deployed='https://codysamuels.github.io/weather-dashboard/' img={WeatherForMeAndYou} title="Weather For Me and You" description='Weather For You and Me is a sleek and intuitive weather application with multiple city support.' github='https://github.com/CodySamuels/weather-dashboard/' />
                                <Card deployed='https://codysamuels.github.io/daily-planner/' img={DailyPlanner} title="Daily Planner" description='Daily Planner is a simple and intuitive time management app.' github='https://github.com/CodySamuels/daily-planner/' />

                            </div>

                            <div className="row">

                                <Card deployed='https://purecloudone.herokuapp.com/' img={PureCloud} title="PureCloud" description='PureCloud is a digital storefront template. I wanted to experiment with stripe integration and possibly develop a storefront for potential freelance work.' github='https://github.com/zackdeacon/Prime_Suspects' />
                                <Card deployed='https://radiant-crag-31130.herokuapp.com/' img={NoteTaker} title="Note Taker" description='This is basic, but functional note taking application.' github='https://github.com/CodySamuels/wander' />
                                <Card deployed='https://radiant-crag-31130.herokuapp.com/' img={BurgerLogger} title="Burger Logger" description='Burger Logger is a goofy, fun, full CRUD application.' github='https://github.com/CodySamuels/note-taker/' />

                            </div>

                        </div>

                    </div>
                    <Sidebar />
                </div>

            </main>
        </>
    )
}
