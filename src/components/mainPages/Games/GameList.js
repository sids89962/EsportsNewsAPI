import React,{useContext} from 'react'
import { GlobalState } from '../../../GlobalState'
import Loading from '../../utils/loading/Loading'
import EventCard from '../../utils/loading/Card/EventCard'
import {Link} from 'react-router-dom'
export default function GameList() {
    const { state, dispatch } = useContext(GlobalState)
    return (
        <div className="container-fluid">
         
             {state.game.length === 0 ? <Loading /> :
                state.game
                    .map((x) => 
                        <>
                            <div className="leagues" key={x.id}>
                                <h1>{x.name}</h1>
                                <div className="flex">
                                    {
                                        x.leagues.slice(0,5).map(y =>
                                            <Link to={`/game/${x.slug}/${y.slug}`} > <EventCard game={y} /></Link>)
                                    }
                                </div>
                            </div>

                        </>
                    )
            }

        </div>
    )
}
