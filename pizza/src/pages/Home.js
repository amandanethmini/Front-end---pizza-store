import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza1.jpg";
import "../styles/Home.css";

function getTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        return { timeOfDay: 'morning' };
    } else if (hours >= 12 && hours < 17) {
        return { timeOfDay: 'afternoon' };
    } else {
        return { timeOfDay: 'night' };
    }
}

function Home() {
    const { timeOfDay, color } = getTimeOfDay();

    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <p style={color}>Good {timeOfDay}!</p>
                <h1 style={{ color }}> Lilly’s Pizzeria </h1>
                <p style={{ color: '#b17e52' }}> PIZZA TO FIT ANY TASTE</p>

                <Link to="/about">
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    );
}

export default Home;
