import React from 'react';



const NavBar = (props) => {
  return (
    <div>
    <header>
    <h1 className="h1-header">COFFEE AHOY</h1>


    <li className="navLink">
    <a href="/coffees">Coffee's</a>
    </li>
    <li className="navLink">
    <a href="/login">Logout</a>
    </li>
    <li className="navLink">
    <a href="/orders">Order's</a>
    </li>
    </header>
    </div>

  )
}

export default NavBar;
