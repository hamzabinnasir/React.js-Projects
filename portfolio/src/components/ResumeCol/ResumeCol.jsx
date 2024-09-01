import "./ResumeCol.css"
import React from "react"
// Importing Components
import ResumeBox from "../ResumeBox/ResumeBox"
export default function ResumeCol({headingText , data}) {
    return (
        <>
            <div className="resumeCol">
                <h4 className="mainResumeHead">{headingText}</h4>
                <ResumeBox data = {data}/>
            </div>
        </>
    )
}