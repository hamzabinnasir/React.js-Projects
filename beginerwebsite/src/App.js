import "./App.css"
import React from "react"
// Importing Components
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Featured from "./components/Fearured/Fearured"
import Service from "./components/Service/Service"
import Price from "./components/Price/Price"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
export default function App() {
  return (
    <>
      <div className="home">
        <div className="polygon"></div>
        <div className="square"></div>
        <div className="circle"></div>
        <div className="rect"></div>
        <Navbar />
        <Hero />
      </div>
      <Featured/>
      <Service/>
      <Price/>
      <Contact/>
      <Footer/>
    </>
  )
}
