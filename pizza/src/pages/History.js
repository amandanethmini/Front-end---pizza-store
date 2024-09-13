import React from 'react';
import History1 from "../assets/History.jpg";
import '../styles/History.css';

function History() {
    return (
        <div className="history">
            <h2>Our History</h2>
            <div className="history-content">
                <img src={History1} alt="History" />
                <p>
                    Pizza Hut is one of the largest chains in the world. But do you know the history behind this iconic pizza restaurant? Pizza Hut was started by two brothers, Dan and Frank Carney. They founded the very first Pizza Hut in Wichita, Kansas in 1958 using $600 borrowed from their mother. They chose the name because it fit on the existing sign on the building they were renting. Later, the building was picked up and moved to the Wichita State University campus, where it will eventually become a Pizza Hut museum.
                </p>
            </div>
        </div>
    );
}

export default History;
