import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

import './order.css'

const Orders = () => {
  const {initialCart}  = useLoaderData()
  const [cart,setCart]= useState(initialCart)
  console.log(cart)
    return (
        <div className='orders'>
           <div className="left">
           {
            cart.map(reviewPd=><ReviewItems
            review={reviewPd}
            
            />)
           }
           </div>
           <div className="right">
           <Cart
           cart={cart}
           />
           </div>
        </div>
    );
};

export default Orders;