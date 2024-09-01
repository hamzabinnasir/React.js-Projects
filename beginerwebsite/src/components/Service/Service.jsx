import "./Service.css"
import React, { useState } from "react"
import play from "../../assets/play.png"
import MiniCard from "../MiniCard/MiniCard";
import girl2 from "../../assets/girl2.png"
export default function Service() {
    const [state, setState] = useState(false);
    return (
        <>
            <div className="serviceSection">
                <div className="serviceleft">
                    {
                        state ?
                            <video id="vd" src="https://videos.pexels.com/video-files/852424/852424-sd_640_360_24fps.mp4" autoPlay controls muted></video>
                            :
                            <img src={girl2} alt="no img" />
                    }
                </div>
                <div className="serviceRight">
                    <h1>Simple process to start</h1>
                    <p>We provide digital experience services to startups and small <br />
                        businesses to looking for a partner of their digital media <br />, design &
                        development, lead generation and communications <br /> requirents. We work
                        with you, not for you. Although we have a <br /> great resources</p>
                    <div className="cardsContainer">
                        <MiniCard />
                        <MiniCard />
                        <MiniCard />
                    </div>
                    <button onClick={() => setState(true)} id="worksBtn"> <img src={play} alt="no img" />How it works</button>
                </div>
                <div className="polygon3"></div>
            </div>
        </>
    )
}