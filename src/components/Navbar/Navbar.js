import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
        <div className="container">
         <div className="content">
         <div className="logo">
            <a href="/"> <img src={logo} alt="" /></a>
         </div>
         <div className="links">
             <Link to='/'>Home</Link>
             <Link to='/shop'>Shop</Link>
             <Link to='/orders'>Order review</Link>
             <Link to='/manage'>Manage Enventory</Link>
             <Link to='/login'>Login</Link>
         </div>
         </div>
         </div> 
     </div>
    );
};

export default Navbar;