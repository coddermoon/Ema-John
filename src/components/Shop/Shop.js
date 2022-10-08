import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

import './shop.css'

const Shop = () => {
  const products = useLoaderData()


    return (
        <div className="shop">
        <div className="products-container">
          <div className="products">
        
          {
            products.map(product=><Products 
              key={product.id}
              product={product}
              />)
          }
       
          
         
          </div>
        </div>
        <div className="cart-container">
<Cart/>
  
        </div>
      </div>
    );
};

export default Shop;