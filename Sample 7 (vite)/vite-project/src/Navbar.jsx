import React from 'react'
import { NavLink, Link } from "react-router";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='Navbar'>
        <nav>
        <h3><Link to="/Contact">Contact</Link></h3>
        <h3><Link to="/About">About</Link></h3>
        <h3><Link to="/Logout">Logout</Link></h3>
        <h3><Link to="/">Home</Link></h3>
        </nav>

    </div>
  )
}

export default Navbar
