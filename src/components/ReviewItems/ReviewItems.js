import React from 'react';
import './reviewItems.css'
const ReviewItems = ({review}) => {
    const { img,name,price,shipping}= review
    return (
        <div className='review'>
        
            <img src={img} alt={name} />
            <div className="content">
                <div className="details">
                    <h2>{name}</h2>
                    <h4>price : {price}</h4>
                    <p>{shipping}</p>
                </div>
                <button>delete</button>
            </div>
        
        </div>
    );
};

export default ReviewItems;