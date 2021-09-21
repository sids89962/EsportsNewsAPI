import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <div className="container-fluid">
            <nav className="navbar">
                <Link to="/" className="navbar-brand anchor">E-Sports News</Link>
               
                <ul className="menu">
                    <li className="nav-item"><Link to="/games" className="anchor nav-link">Games</Link></li>
                    <li className="nav-item"><Link to="" className="anchor nav-link">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}
