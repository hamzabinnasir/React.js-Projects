import "./Single.css"
import React from "react"
// Importing Components
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import Chart from "../../components/Chart/Chart"
import Table from "../../components/Table/Table"
export default function Single() {
    return (
        <>
            <div className="singleSection">
                <Sidebar />
                <div className="singleWrapper">
                    <Navbar />
                    <div className="singlePageContainer">
                        {/* Single Card */}
                        <div className="singleCardWrapper">
                            <div className="singleCard">
                                <p className="singlePara">information</p>
                                <div className="imgAndContent">
                                    <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="no img" />
                                    <div className="leftSide">
                                        <h1>Jane Doe</h1>
                                        <p>Email: janedoe@gmail.com</p>
                                        <p>Phone: +1 2345 67 89</p>
                                        <p>Address: Elton St. 234 Garden <br /> yd.NewYork</p>
                                        <p>Country: USA</p>
                                    </div>
                                </div>
                                <button id="editBtn">Edit</button>
                            </div>

                            {/* Chart Card */}
                            <div className="chartCard">
                                <p className="singlePara">User Spending ( Last 6 Months )</p>
                                <Chart aspect={3.4 / 1} />
                            </div>
                        </div>
                        {/* Table */}
                        <Table />
                    </div>
                </div>
            </div>
        </>
    )
}