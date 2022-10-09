import { faArrowRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'

const Cart = ({cart,deleteCart}) => {
  let price = 0;
  let shipping = 0;
  let quantity = 0

  for(const product of cart){
    quantity= quantity+product.quantity
     price = price + product.price* product.quantity
     shipping = shipping + product.shipping*  product.quantity
  }

  const tax =parseFloat((price *.1).toFixed(2))
  const grandTotal = tax+price+shipping

    return (
        <div className='cart'>
        <div className='full-cart'>
        <div className='calc'>
        <h2 >Order Summary</h2>  
        <hr />
         <h5>Selected Items :{quantity}</h5>
        
     
          <h5>Total Price :{price}</h5>
       
         <h5>Total Shipping Charge :{shipping}</h5>
         <h5>TAX :{tax}</h5>
         <h3>Grand Total:{grandTotal}</h3>
        </div>
        <div className="btn-group">
          <button className='btn-cart bg-orange'>Review Order <span className='icon'> <FontAwesomeIcon icon={faArrowRight}/></span> </button>
          <button onClick={deleteCart} className='btn-cart bg-red'>Clear Cart <span className='icon'> <FontAwesomeIcon icon={faTrash}/></span> </button>
        </div>
        </div>
      </div>
    );
};

export default Cart;