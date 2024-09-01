import "./List.css"
import React from "react"
// Importing Components
import Navbar from "../../components/Navbar/Navbar.jsx"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import DataTable from "../../components/DataTable/DataTable.jsx"
export default function List() {
    return (
        <>
            <div className="listSection">
                <Sidebar/>
                <div className="userListWrapper">
                    <Navbar/>
                    <div className="userListContainer">
                        <DataTable/>
                    </div>
                </div>
            </div>
        </>
    )
}