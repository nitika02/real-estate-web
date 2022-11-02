import React from 'react';
import Button from '../button';
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src="https://s.zillowstatic.com/pfs/static/z-logo-default.svg" alt="navbar logo" className='logo' />
        </div>
        <div className='navbar-items'>
            <a href="#" className='rent'>Rent</a>
            <a href="#">Buy</a>
            <a href="#">Sell</a>
            <a href="#">Manage Property</a>
            <i class="fa-solid fa-chevron-down fa"></i>
            <a href="#">Resources</a>
            <i class="fa-solid fa-chevron-down fa"></i>
        </div>
        <div className='navbar-buttons'>
            <Button title="Login" />
            <Button title="Sign up"/>
        </div>
    </div>
  )
}

export default Navbar