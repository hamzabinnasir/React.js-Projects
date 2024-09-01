import "./ListItem.css"
import React, { useState } from "react"
// Importinmg Material Ui Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import ThumbDownAltSharpIcon from '@mui/icons-material/ThumbDownAltSharp';
// importing link
import { Link } from "react-router-dom";
export default function ListItem({ index }) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
            <Link className="link" to={"/watch"}>
                <div className="listItem" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} style={{ left: isHovered && index * 225 - 50 }}>
                    {
                        isHovered ?
                            <video id="vd" src="https://videos.pexels.com/video-files/3569286/3569286-sd_640_360_24fps.mp4" autoPlay loop muted></video>
                            :
                            <img src="https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee" alt="no img" />
                    }
                    <div className="listContent">
                        <div className="iconDiv">
                            <span className="listIcon"><PlayArrowIcon className="ic" /></span>
                            <span className="listIcon"><AddIcon className="ic" /></span>
                            <span className="listIcon"><ThumbUpAltSharpIcon className="ic" /></span>
                            <span className="listIcon"><ThumbDownAltSharpIcon className="ic" /></span>
                        </div>
                        <p className="detailsPara">1 hour 14 mins <span className="number">+16</span> 1999</p>
                        <p className="infoPara">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Praesentium hic rem eveniet error possimus, neque ex doloribus.</p>
                        <div className="genre">Action</div>
                    </div>
                </div>
            </Link>
        </>
    )
}