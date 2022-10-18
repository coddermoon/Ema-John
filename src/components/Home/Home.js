import React from 'react';
import './Home.css'
import img from '../../assets/images/hero.png'

const Home = () => {
    return (
        <div className='container home'>
           <div className="hero-content"></div>
           <div className="hero-image">
            <img src={img} alt="" />
           </div>
        </div>
    );
};

export default Home;