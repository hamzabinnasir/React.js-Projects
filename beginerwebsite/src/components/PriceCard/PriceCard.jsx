import "./PriceCard.css"
import React from "react"
export default function priceCard({type , price}) {
    return (
        <>
            <div className="priceCard">
                <span>$ <h1>{price}</h1> /month</span>
                <button id="outlinePlan">{type}</button>
                <div className="paraBox">
                    <p>200 Hand-Crafted Templates</p>
                    <p>Exclusive Support</p>
                    <p>50+ Prebuild Websites</p>
                    <p>Premium Plugins</p>
                </div>
                <button id="joinNowBtn">Join Now</button>
            </div>
        </>
    )
}