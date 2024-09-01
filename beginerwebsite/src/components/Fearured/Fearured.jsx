import "./Featured.css"
import React from "react"
import mobile from "../../assets/mobile.png"
export default function Featured() {
    return (
        <>
            <div className="featuredSection">
                <div className="square"></div>
                <div className="circle"></div>
                <div className="rect"></div>
                <div className="featuredLeft">
                    <img src={mobile} alt="no img" />
                </div>
                <div className="featuredRight">
                    <h1><span className="bold">good </span>design</h1>
                    <h1><span className="bold">good </span>business</h1>
                    <p className="italic">We Know that good design means good business.</p>
                    <p className="featuredDesc">We help our clients succeed by creating brand identities, digital <br /> esperiences, and print materialthat communicate clearly, achieve <br />marketing goals, and look fantastic.</p>
                    <p className="dull">We care your business and guarentee you to achieve marketing goals.</p>
                    <div className="learnMore">
                        <button id="learnMoreBtn">Learn More</button>
                    </div>
                </div>
                <div className="polygon2"></div>
            </div>
        </>
    )
}