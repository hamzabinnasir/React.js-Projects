import "./Watch.css"
import React from "react"
// Importing Material Ui Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// importing Link
import { Link } from "react-router-dom";

export default function Watch() {
    return (
        <>
            <div className="watchSection">
                <Link className="link" to={"/"}>
                    <div className="backDiv">
                        <ArrowBackIcon className="backIcon" />
                        <li><h2>Home</h2></li>
                    </div>
                </Link>
                <video id="watchVideo" src="https://videos.pexels.com/video-files/3569286/3569286-sd_640_360_24fps.mp4" autoPlay controls progress></video>
            </div>
        </>
    )
}