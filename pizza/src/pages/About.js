import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MultiplePizzas from "../assets/pizza2.jpg";
import "../styles/About.css";
import History from "./History";
import Team from "./Team";
import Values from "./Values";

function About() {
    return (
        <div className="about">
            <div
                className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizzas})` }}
            ></div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Pizza Hut, a subsidiary of Yum! Brands, is the world's largest pizza company and home of Pan Pizza. Pizza Hut began 60 years ago in Wichita, Kansas, and today is an iconic global brand that delivers more pizza, pasta and wings than any other restaurant in the world. To date, Pizza Hut Sri Lanka employs over 3,000 staff members with diverse backgrounds. As an equal opportunity employer, Pizza Hut utilizes 1% of its annual income towards training. The company strongly believes in creating a results-oriented fun working environment.
                </p>
                <nav className="aboutNav">
                    <Link to="/History">History</Link>
                    <Link to="/Team">Team</Link>
                    <Link to="/Values">Values</Link>
                </nav>


                <div className="aboutContent">
                    <Routes>
                        <Route path="history" element={<History />} />
                        <Route path="team" element={<Team />} />
                        <Route path="values" element={<Values />} />
                    </Routes>
                </div>

            </div>
        </div>
    );
}

export default About;
