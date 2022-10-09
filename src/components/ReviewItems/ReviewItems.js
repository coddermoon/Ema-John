import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                    <p>price : {price}</p>
                    <p>{shipping}</p>
                </div>
                <button  onClick={'hello'} className='btn-dlt'><FontAwesomeIcon className='deleteIcon' icon={faTrash} /></button>
            </div>
        
        </div>
    );
};

export default ReviewItems;