import "./Navbar.css"
import React from "react"
export default function Navbar() {
    return (
        <>
            <nav id="navbar">
                <div className="logoAndLists">
                    <h1 id="logo">Agency</h1>
                    <ul className="listContainer">
                        <li>home</li>
                        <li>features</li>
                        <li>services</li>
                        <li>prices</li>
                        <li>contacts</li>
                    </ul>
                </div>
                <button id="joinBtn">join today</button>
            </nav>
        </>
    )
}