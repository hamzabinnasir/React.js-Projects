import "./App.css"
import "./phone.css"
import React from "react"
// Importing Components
import Home from "./Pages/Home/Home.jsx"
import Featured from "./Pages/Featured/Featured.jsx"
import Resume from "./Pages/Resume/Resume.jsx"
import About from "./Pages/About/About.jsx"
import Testimonial from "./Pages/Testimonial/Testimonial.jsx"
import Services from "./Pages/Services/Services.jsx"
import Skills from "./Pages/Skills/Skills.jsx"
import Contact from "./Pages/Contact/Contact.jsx"
import Footer from "./Pages/Footer/Footer.jsx"
export default function App() {
  return (
    <>
      <div className="app">
        <Home />
        <div className="wrapper">
          <Featured />
          <Resume />
          <About />
          <Services />
          <Skills />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}