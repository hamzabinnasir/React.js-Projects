import "./TopBar.css"
import React from "react"
// Icons
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

// Images
import image1 from "../assets/person/1.jpeg"
export default function TopBar() {
    return (
        <nav className="navbar">
            <h1>Lamasocials</h1>
            <div className="searchBar">
                <AiOutlineSearch className="i"/>
                <input type="text" placeholder="Search for friend, post or video" />
            </div>
            <div className="rightBar">
                <ul>
                    <li>Home Page</li>
                    <li>TimeLine</li>
                </ul>
                <div className="icons">
                    <div className="icon">
                        <IoNotifications className="i" />
                        <span>1</span>
                    </div>
                    <div className="icon">
                        <BsChatLeftDotsFill className="i" />
                        <span>1</span>
                    </div>
                    <div className="icon">
                        <IoPersonSharp className="i" />
                        <span>1</span>
                    </div>
                </div>
                <img src={image1} alt="no img" />
            </div>
        </nav>
    )
}