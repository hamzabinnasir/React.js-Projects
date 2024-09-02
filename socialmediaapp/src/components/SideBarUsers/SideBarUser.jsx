import "./SideUser.css";
import React from "react"
export default function SideBarUser({userData}) {
    return (
        <div className="aboutBox">
            <img src={userData.profilePicture} alt="no img" />
            <h4>{userData.username}</h4>
        </div>
    )
}