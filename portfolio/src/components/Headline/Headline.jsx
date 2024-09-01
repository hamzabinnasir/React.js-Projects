import "./Headline.css"
import React from "react"
export default function Headline({ text, subText }) {
    return (
        <>
            <h2 className="headline"><span className="headlineLight">{text}</span> <span className="headlineBold">{subText}</span></h2>
        </>
    )
}