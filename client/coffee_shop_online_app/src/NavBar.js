import React from 'react';




const NavBar = (props) => {
  return (
    <header>
    <h1 className="h1-header">COFFEE AHOY</h1>

    <ul className="ul-links-bar">
    <li className="navLink">
    <a href="/coffees">Coffee's</a>
    </li>
    <li className="navLink">
    <a href="/login">Login</a>
    </li>
    <li className="navLink">
    <a href="/orders">Checkout</a>
    </li>
    <li className="navLink">
    <a href="/about">About</a>
    </li>
    </ul>
    </header>


  )
}

export default NavBar;
