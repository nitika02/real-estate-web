import React, { useState } from 'react';
import "./filter.css";
import Button from "../button";

const Filter = ({location, type, price, onLocationFilter, onTypeFilter, onPriceFilter}) => {
    const [filters, setFilters] = useState({
        loca: "",
        htype: "",
        price: "",
    })

    const HandleInput = (field) => (event) => {
        const { value } = event.target;

        setFilters( {
            ...filters,
            [field]: value,
        })
        switch (field) {
            case "loca":
                onLocationFilter(value);
                break;
            case "htype":
                onTypeFilter(value);
                break;
            case "price":
                onPriceFilter(value);
                break;
            default: 
                break;
        }
    }
  return (
    <div className='filter'>
        <label>
            Location<br></br>
            <select onChange={HandleInput("loca")}>
                <option value="">Select</option>
                {location.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select><br></br>
        </label>
        <div className="location-search-seperator"></div>
        <label>
            When <br></br>
            <input type="date" placeholder='Select Move-in Date' /><br></br>
        </label>
        <div className="location-search-seperator"></div>
        <label>
            Price <br></br>
            <select onChange={HandleInput("price")}>
                <option value="">Select</option>
                {price.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select><br></br>
        </label>
        <div className="location-search-seperator"></div>
        <label>
            Property Type <br></br>
            <select onChange={HandleInput("htype")}>
            <option value="">Select</option>
                {type.map((item) => (
                    <option value={item} key={item}>{item}</option>
                ))}
            </select><br></br>
        </label>
        <div className="location-search-seperator"></div>
        <div className='search-btn'>
            <Button title="Search"/>
        </div>
    </div>
  )
}

export default Filter