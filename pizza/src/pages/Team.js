import React from "react";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.jpg";
import '../styles/Team.css';

function Team() {
    return (
        <div className="team">
            <h2>Our Team</h2>
            <div className="team-member">
                <img src={team1} alt="Team Member1" />
                <p>John Doe - CEO</p>
            </div>
            <div className="team-member">
                <img src={team2} alt="Team Member2" />
                <p>Jane Smith - CTO</p>
            </div>
        </div>
    );
}

export default Team;
