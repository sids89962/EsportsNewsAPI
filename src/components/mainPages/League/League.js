import React,{useContext} from 'react'
import { useParams } from 'react-router'
import { GlobalState } from '../../../GlobalState'
import './League.css'
export default function League() {
    const { state, dispatch } = useContext(GlobalState)
    const res =useParams()
    
    
    const ressp =  state.game.filter(x => x.slug === res.game )
   
    const lea = ressp[0].leagues.filter(x => x.slug === res.league)
   
    
    return (
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Begin-at</th>
                        <th scope="col">End-at</th>
                        <th scope="col">Season</th>
                        <th scope="col">Tier</th>
                        <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody>
                  { lea[0].series
                  .map(y=>
                    <tr>
                        <th scope="row">{y.id}</th>
                        <td>{y.begin_at}</td>
                        <td>{y.end_at}</td>
                        <td>{y.season}</td>
                        <td>{y.tier}</td>
                        <td>{y.year}</td>
                    </tr>
                  )}
                </tbody>
            </table>
        </div>
    )
}
