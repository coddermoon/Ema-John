import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';

import './order.css'

const Orders = () => {
  const {initialCart}  = useLoaderData()
  const [cart,setCart]= useState(initialCart)
 
  const removeItem =(id)=>{
   
    const remaining = cart.filter(product=>product.id!== id)
    setCart(remaining)
    removeFromDb(id)
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