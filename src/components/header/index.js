import React from 'react';
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <h1>Search properties to rent</h1>
        <div>
            <input placeholder='Search with Search Bar' type="text" className='search-bar' />
        </div>
    </div>
  )
}

export default Header