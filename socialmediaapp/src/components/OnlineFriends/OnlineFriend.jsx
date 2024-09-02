import "./OnlineFriend.css"
import React from "react"
export default function OnlineFriend({friendData}) {
    return (
        <>
            <li className="friendList">
                <div className="cirlceAndImg">
                    <img src={friendData.profilePicture} alt="no img" />
                    <div className="circle"></div>
                </div>
                <h4>{friendData.username}</h4>
            </li>
        </>
    )
}