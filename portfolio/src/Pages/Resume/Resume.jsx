import "./Resume.css"
import React from "react"
// Importing Components
import Headline from "../../components/Headline/Headline.jsx"
import ResumeCol from "../../components/ResumeCol/ResumeCol.jsx";
// Importing Data
import { educationData, experienceData } from "./ResumeColData.js";
export default function Resume() {
    return (
        <>
            {/* Resume Section */}
            <div id="resumeSection">
                <Headline text={"My"} subText={"Resume"} />
                {/* resume Container */}
                <div className="resumeContainer">
                    <ResumeCol headingText={"Education"} data={educationData}/>
                    <ResumeCol headingText={"Experience"} data={experienceData}/>
                </div>
            </div>
        </>
    )
}