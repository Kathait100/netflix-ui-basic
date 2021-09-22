import React from 'react';
import './home.scss';
import Navbar from '../../components/Navbar/navbar';
import Featured from '../../components/featued/featured';
import List from '../../components/list/list'
const Home = () => {
    return (
        <div className = "home-section">
         <Navbar />
         <img src="https://images.pexels.com/photos/3811867/pexels-photo-3811867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500" width = "100%" alt="" className="src" />
        <Featured  />
        <List />
        <List />
        <List />
        </div>
    )
}

export default Home
