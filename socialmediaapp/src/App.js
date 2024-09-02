import "./App.css"
import React from "react"
import TopBar from "./components/TopBar/TopBar"
import SideBar from "./components/SideBar/SideBar"
import Feed from "./components/Feed/Feed"
import RightBar from "./components/RightBar/RightBar"
export default function App() {
  return (
    <>
      <TopBar />
      <div className="hero">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </>
  )
}