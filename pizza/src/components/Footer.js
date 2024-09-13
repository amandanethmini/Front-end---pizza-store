import React from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <Link to="https://www.instagram.com"><InstagramIcon /></Link>
                <Link to="https://www.facebook.com"><FacebookIcon /></Link>
                <Link to="https://www.twitter.com"><TwitterIcon /></Link>
            </div>
            <p> &copy; 2024 Pizza Place. All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
