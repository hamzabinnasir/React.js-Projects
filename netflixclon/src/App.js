import "./App.css"
import React from "react"
import { BrowserRouter , Routes , Route } from "react-router-dom"
// Importing Pages
import Home from "./Pages/Home/Home"
import Watch from "./Pages/Watch/Watch"
import Register from "./Pages/Register/Register"
import Login from "./Pages/Login/Login"
export default function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/watch" element = {<Watch/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/register" element = {<Register/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}