import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './reviewItems.css'
const ReviewItems = ({review,removeItem}) => {
    const { img,name,price,shipping,id}= review
    return (
        <div className='review'>
        
            <img src={img} alt={name} />
            <div className="content">
                <div className="details">
                    <h2>{name}</h2>
                    <p>price : {price}</p>
                    <p>{shipping}</p>
                </div>
                <button  onClick={()=>removeItem(id)} className='btn-dlt'><FontAwesomeIcon className='deleteIcon' icon={faTrash} /></button>
            </div>
        
        </div>
    );
};

export default ReviewItems;