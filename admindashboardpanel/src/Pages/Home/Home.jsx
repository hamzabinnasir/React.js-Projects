import "./Home.css"
import React from "react"
// Importing Components
import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Widget from "../../components/Widgets/Widget"
import Featured from "../../components/Featured/Featured"
import Chart from "../../components/Chart/Chart"
import Table from "../../components/Table/Table"
export default function Home() {
    return (
        <>
            <div className="homeSection">
                <Sidebar />
                <div className="homeWrapper">
                    <Navbar />
                    <div className="container">
                        <div className="widgetSection">
                            <Widget type={"user"} />
                            <Widget type={"order"} />
                            <Widget type={"earning"} />
                            <Widget type={"balance"} />
                        </div>
                        <div className="cardSection">
                            <Featured />
                            <div className="chartSection">
                                <p className="chartPara">Last 6 Months (Revenue)</p>
                                <Chart aspect={2/1}/>
                            </div>
                        </div>
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}