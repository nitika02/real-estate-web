import React, { useState } from 'react';
import "./header.css"

const Header = ({ onNameFilter }) => {
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    const { value } = event.target;
    setName(value);
    onNameFilter(value);
  }

  return (
    <div className='header'>
        <h1>Search properties to rent</h1>
        <div>
            <input 
            placeholder='Search with Search Bar' 
            type="text" 
            className='search-bar'
            onChange={handleNameChange} 
            />
        </div>
    </div>
  )
}

export default Header