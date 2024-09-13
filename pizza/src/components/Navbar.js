import React, { useState, useEffect } from "react";
import Logo from "../assets/pizzaLogo.png";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";


function Clock() {
    const [time, setTime] = useState(new Date());


    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div className="clock">
            {time.toLocaleTimeString()}
        </div>
    );
}

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} alt="Logo" />
                <div className="hiddenLinks">
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>

                </div>
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>

                <Clock />
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;