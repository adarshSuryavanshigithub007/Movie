import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
  <header>
    <div className="container">
        <div className="inner-content">
            <div className="brand">
                <Link to="/">Watchlist</Link>
            </div>
            <ul className="nav-List">
                <li>
                    <Link to="/">Watch List</Link>
                </li>
                <li>
                    <Link to="/Watched">Watched</Link>
                </li>
                <li>
                    <Link to="/add" className='btn'>Add</Link>
                </li>
            </ul>
        </div>
    </div>
  </header>
  )
}

export default Header