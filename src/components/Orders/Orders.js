import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

import './order.css'

const Orders = () => {
  const {initialCart}  = useLoaderData()
  const [cart,setCart]= useState(initialCart)
 
  const removeItem =(removedProduct)=>{
    console.log(removedProduct)
  }

    return (
        <div className='orders'>
           <div className="left">
           {
            cart.map(reviewPd=><ReviewItems
            review={reviewPd}
            key={reviewPd.id}
            removeItem={removeItem}
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