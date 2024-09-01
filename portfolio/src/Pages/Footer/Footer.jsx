import "./Footer.css"
import React from "react"
// Importing Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import { FaLinkedin } from "react-icons/fa";
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <>
            <footer id="footer">
                <p>Copyright © 2024 All rights reserved | This template is made <FavoriteIcon className="heartIcon" /> by Hamza Bin Nasir</p>
                <div className="footerIcoContainer">
                    <div className="iconDiv">
                        <a className="link" href="https://www.linkedin.com/in/hamza-nasir-771161287/"><FaLinkedin className="footerIcon" /></a>
                    </div>
                    <div className="iconDiv">
                        <a className="link" href="https://github.com/hamzabinnasir"><GitHubIcon className="footerIcon" /></a>
                    </div>
                    <div className="iconDiv">
                       <FaInstagram className="footerIcon" />
                    </div>
                </div>
            </footer>
        </>
    )
}