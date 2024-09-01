import "./Price.css"
import React from "react"
import PriceCard from "../PriceCard/PriceCard"
export default function Price() {
    return (
        <>
            <div className="priceSection">
                <div className="polygon4"></div>
                <PriceCard type = {"Basic Plan"} price = {"10"}/>
                <PriceCard type = {"Premium Plan"} price = {"20"}/>
                <PriceCard type = {"Advanced Plan"} price = {"30"}/>
            </div>
        </>
    )
}