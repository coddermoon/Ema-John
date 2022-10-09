import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../assets/utilities/fakedb';
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

  const deleteCart=()=>{
    setCart([ ])
    deleteShoppingCart()
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

{/* make A conditional rendering */}

{
  cart.length ===0 && <div style={{textAlign:'center'}}>
    <h2 >Your Cart is empty </h2>
    <h3>Go to <Link to='/shop'>Shop</Link>To Shoping Now</h3>
  </div>
}

           </div>
           <div className="right">
           <Cart
           cart={cart}
           deleteCart={deleteCart}
           />
           </div>
        </div>
    );
};

export default Orders;