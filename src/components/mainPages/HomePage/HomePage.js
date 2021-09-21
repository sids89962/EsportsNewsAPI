import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { GlobalState } from '../../../GlobalState'
import Loading from '../../utils/loading/Loading'
import EventCard from '../../utils/loading/Card/EventCard'
import { Link } from 'react-router-dom'
export default function HomePage() {
    const { state, dispatch } = useContext(GlobalState)

    console.log(state)
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 banner">
                    <div className="image">

                    </div>
                    <div className="banner-text">
                        <h2>Stay Connected <br></br> with the E-world</h2>
                    </div>
                </div>

            </div>


            {state.game.length === 0 ? <Loading /> :
                state.game.filter(item => item.name === "PUBG" || item.name === "Valorant")
                    .map((x) => 
                        <>
                            <div className="leagues" key={x.id}>
                                <h1>{x.name}</h1>
                                <div className="flex">
                                    {
                                        x.leagues.slice(0,4).map(y =>
                                            <Link to={`/game/${x.slug}/${y.slug}`} ><EventCard game={y} /></Link> )
                                    }
                                </div>
                            </div>

                        </>
                    )
            }


        </div>
    )
}
