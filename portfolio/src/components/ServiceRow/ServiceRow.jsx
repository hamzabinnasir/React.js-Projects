import "./ServiceRow.css"
import React from "react"
//  Importing Components
import ServiceCard from "../ServiceCard/ServiceCard";
export default function ServiceRow({rowData}) {
    return (
        <>
            <div className="row row1">
                <ServiceCard rowData = {rowData}/>
            </div>
        </>
    )
}