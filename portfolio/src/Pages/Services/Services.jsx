import "./Services.css"
import React from "react"
// Importing Components
import Headline from "../../components/Headline/Headline"
import ServiceRow from "../../components/ServiceRow/ServiceRow"
// Imperting Row Data
import { row1Data , row2Data } from "./serviceRowData"
export default function Services() {
    return (
        <>
            <div id="serviceSection">
                {/* Services Container */}
                <Headline text={"My"} subText={"Services"} />
                <div className="servicesContainer">
                    <ServiceRow rowData = {row1Data}/>
                    <ServiceRow rowData = {row2Data}/>
                </div>
            </div>
        </>
    )
}