import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0
  
    return (
        <div className='cart'>
        <div className='full-cart'>
        <div className='calc'>
        <h2 >Order Summary</h2>  
        <hr />
         <h5>Selected Items :</h5>
        
     
          <h5>Total Price :</h5>
       
         <h5>Total Shipping Charge :</h5>
         <h5>TAX :</h5>
         <h3>Grand Total:</h3>
        </div>
        <div className="btn-group">
          <button className='btn-cart bg-orange'>Review Order <span className='icon'> <FontAwesomeIcon icon={faArrowRight}/></span> </button>
          <button className='btn-cart bg-red'>Clear Cart <span className='icon'> <FontAwesomeIcon icon={faTrash}/></span> </button>
        </div>
        </div>
      </div>
    );
};

export default Cart;