import "./Hero.css"
import React from "react"
import girlImg from "../../assets/girl.png"
export default function Hero() {
    return (
        <>
            <div className="heroSection">
                <div className="left">
                    <div className="leftContent">
                        <h1>Adventure in <br /> creative age</h1>
                        <p className="mainPara">We believe that designing products and services in <br /> close partnership with our clients is the only way to <br /> have a real impact on their business</p>
                        <div className="leftContentInner">
                            <button id="startBtn">start a project</button>
                            <div className="callUs">
                                <p className="red">Call Us (012) 345 6789</p>
                                <span>For any question or concern</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img id="rightImg" src={girlImg} alt="no img" />
                </div>
            </div>
        </>
    )
}