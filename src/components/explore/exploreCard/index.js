import React, { useState } from 'react';
import "./exploreCard.css"

const ExploreCard = ({list}) => {
    const [toggle, setToggle] = useState(false);


    const image = list.image_src;
    const title = list.title;
    const price = list.price;
    const desc = list.desc;
    const beds = list.beds;
    const bathrooms = list.bathrooms;
    const area = list.area;
    const type = list.type;
    const location = list.location;
    const popular = list.tag;

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div className='explore-card'>
        <div className='explore-card-cover'>
            <img src={image} alt={list.id} className="explore-card-image" />
            {popular && <div className='explore-card-tag-section'>
                <i class="fa-solid fa-star fa"></i>
                {popular && <div className='explore-card-tag'>{popular}</div>}
            </div>}
        </div>
        <div className='explore-card-price'>
            <div className='explore-price'><span>{price}</span>/month</div>
            {toggle === false ? <i class="fa-regular fa-heart fa" onClick={handleToggle}></i> : <i class="fa-solid fa-heart fa-red" onClick={handleToggle}></i>}
            
            
        </div>
        <div className='explore-card-title'>{title}</div>
        <div className='explore-card-desc'>{desc}</div>
        <div className="seperator"></div>
        <div className='explore-card-specs'>
            <div className='explore-card-beds'>
                <i class="fa-solid fa-bed fa"></i>
                <div>{beds} beds</div>
            </div>
            <div className='explore-card-bath'>
                <i class="fa-solid fa-sink fa"></i>
                <div>{bathrooms} bathrooms</div>
            </div>
            <div className='explore-card-area'>
            <i class="fa-solid fa-layer-group fa"></i>
                <div>{area} m2</div>
            </div>
        </div>
    </div>
  )
}

export default ExploreCard