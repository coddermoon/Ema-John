import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import App from './App';
import Orders from './components/Orders/Orders';
import { addLoaders } from './loaders/addLoaders';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/> ,
    children:[
      {
        path: "/",
        element:<Home/> ,
      },
      {
        path: "/shop",
        loader:  ()=> fetch('fakeData/products.json'),
        element:<Shop/> ,
      },
      {
        path: "/orders",
        loader:addLoaders,
        element:<Orders/> ,
      },
      {
        path: "/manage",
        element:<h2>this is mannage page</h2> ,
      },
    ]
  },
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
