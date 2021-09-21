import React from 'react'
import {Link} from 'react-router-dom'
import './Card.css'
export default function EventCard({game}) {
    return (
        <div className="card" style={{width: '18rem'}}>
           <img className="card-img-top" src={game.image_url || "http://www.macedonrangeshalls.com.au/wp-content/uploads/2017/10/image-not-found.png"} alt="Card image cap" />
           
        </div>
    )
}
