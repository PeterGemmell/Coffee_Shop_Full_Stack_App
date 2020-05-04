import React from 'react';



const NavBar = (props) => {
  return (
    <div>
    <header>
    <h1 className="h1-header">Coffee Ahoy</h1>

    <ul className="ul-links-bar">
    <li className="navLink">
    <a href="/coffees">Coffee's</a>
    </li>
    <li className="navLink">
    <a href="/login">Logout</a>
    </li>
    </ul>
    </header>
    </div>

  )
}

export default NavBar;
