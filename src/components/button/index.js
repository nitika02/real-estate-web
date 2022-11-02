import React from 'react'
import { useState } from "react";
import "./button.css";

const Button = (props) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current);
    }
  return (
    <button className={isActive ? "active" : "btn"} onClick={handleClick}>{props.title}</button>
  )
}

export default Button