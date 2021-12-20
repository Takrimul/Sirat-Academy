import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./Home.css";
import data from '../../data/data/data';
import Header from './Header';
import Course from './Course';

const Home = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <Header/>
            <Course/>
        </div>
    )
}

export default Home;
