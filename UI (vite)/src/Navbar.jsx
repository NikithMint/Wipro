import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav class="navbar">
    <div class="nav-left">BESNARD</div>
        <div class="nav-right">
            <a href="#">Login</a>
            <a href="#">Search</a>
            <a href="#">Cart</a>
        </div>
    </nav>
  )
}

export default Navbar
