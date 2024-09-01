import "./Navbar.css"
import React from "react"
// Importing Material Ui Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

// Importing useContext and darkModeContext
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
export default function Navbar() {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <>
            <nav id="navbar">
                <div className="searchBox">
                    <input type="text" placeholder="Search"/>
                    <SearchOutlinedIcon/>
                </div>
                <div className="navIcons">
                    <div className="widget">
                        <LanguageOutlinedIcon className="navIcon"/>
                        <span>Englich</span>
                    </div>
                    <div className="widget">
                        <DarkModeOutlinedIcon className="navIcon" onClick={()=>dispatch({type : "TOGGLE"})}/>
                    </div>
                    <div className="widget">
                        <FullscreenExitOutlinedIcon className="navIcon"/>
                    </div>
                    <div className="navFeatured">
                        <NotificationsOutlinedIcon className="navIcon"/>
                        <span className="circle">1</span>
                    </div>
                    <div className="navFeatured">
                        <ChatBubbleOutlineOutlinedIcon className="navIcon"/>
                        <span className="circle">2</span>
                    </div>
                    <div className="widget">
                        <FormatListBulletedOutlinedIcon className="navIcon"/>
                    </div>
                    <img id="navProfile" src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="no img" />
                </div>
            </nav> 
        </>
    )
}