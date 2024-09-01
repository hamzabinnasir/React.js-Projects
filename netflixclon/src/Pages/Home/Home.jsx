import "./Home.css"
import React from "react"
// Importing Components
import Navbar from '../../components/Navbar/Navbar'
import Featrured from "../../components/Featured/Featured"
import List from "../../components/List/List"
export default function Home() {
    return (
        <>
            <div className="homeSection">
                <Navbar/>
                <Featrured type = {"Genre"}/>
                <div className="listWrapper">
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                    <List/>
                </div>
            </div>
        </>
    )
}