import "./Home.css"
import React from "react"
// Importing Components
import Navbar from "../../components/Navbar/Navbar.jsx"
import Hero from "../../components/Hero/Hero.jsx"
export default function Home(){
    return(
        <>
        <div id="homeSection">
            <Navbar/>
            <Hero/>
        </div>
        </>
    )
}