import "./ServiceCard.css"
import React from "react"
export default function ServiceCard({ rowData }) {
    return (
        <>
            {/* Service Card */}
            {
                rowData.map((item) =>
                    <div key={item.id} className="serviceCard">
                        <div className="circleIcon">
                            {item.icon}
                        </div>
                        <h1>{item.span1}</h1>
                        <p>{item.para}</p>
                    </div>
                )
            }
        </>
    )
}