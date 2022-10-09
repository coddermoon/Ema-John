import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredCart } from '../../assets/utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

import './shop.css'

const Shop = () => {
  const[cart,setCart]=useState([])
  const products = useLoaderData()

  useEffect(()=>{

    const storedCart = getStoredCart()
    let savedCart = []
    for (const id in storedCart) {
      
  
     const addedProduct = products.find(product=>id ===product.id)
     if(addedProduct){
      const quantity = storedCart[id]
      addedProduct.quantity=quantity
      
      savedCart.push(addedProduct)
     }
     
    }
    setCart(savedCart)
  
  },[products])

  // handle add to Cart

  const handleAddToCart=(selectedProduct)=>{
    let newCart= []
    const exist = cart.find(product=>product.id=== selectedProduct.id)
    if (!exist) {
      selectedProduct.quantity= 1
      newCart=[...cart,selectedProduct]
    }else{
  const remaining = cart.filter(product=>product.id !== selectedProduct.id)
  exist.quantity = exist.quantity+1
  newCart=[...remaining,exist]


    }
    setCart(newCart)
  }


    return (
        <div className="shop">
        <div className="products-container">
          <div className="products">
        
          {
            products.map(product=><Products 
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
              />)
          }
       
          
         
          </div>
        </div>
        <div className="cart-container">
<Cart

cart={cart}

/>
  
        </div>
      </div>
    );
};

export default Shop;