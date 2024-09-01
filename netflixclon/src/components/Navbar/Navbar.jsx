import "./Navbar.css"
import React, { useState } from "react"
// Material Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// Importing Links
import { Link } from "react-router-dom";
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        if (window.pageYOffset === 0) {
            setIsScrolled(false);
        }
        else {
            setIsScrolled(true);
        }
    }
    return (
        <>
            <nav className={isScrolled ? "navbar scrolled" : "navbar"}>
                {/* Left Nav */}
                <div className="leftNav">
                    <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="no img" />
                    <ul className="listContainer">
                        <li><Link className="link" to={"/"}>Homepage</Link></li>
                        <li>Series</li>
                        <li>Movies</li>
                        <li>New and Popular</li>
                        <li>My List</li>
                    </ul>
                </div>
                {/* Right Nav */}
                <div className="rightNav">
                    <SearchIcon className="icon" />
                    <li className="upperCase">kid</li>
                    <NotificationsIcon className="icon" />
                    <img id="profileImg" src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="no img" />
                    <div className="dropDownContainer">
                        <ArrowDropDownIcon className="icon dropIcon" />
                        <ul className="dropDown">
                            <li><Link className="link" to={"/login"}>Login</Link></li>
                            <li><Link className="link" to={"/register"}>Register</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}