import "./RightBar.css"
import OnlineFriend from "../OnlineFriends/OnlineFriend"
import React from "react"

// Images
import gift from "../assets/post/gift.png"
import add from "../assets/post/ad.png"

// Import Users
import { Users } from "../Post/postData"

export default function RightBar() {
    return (
        <>
            {/* Right Bar Section */}
            <div className="rightBarSection">

                {/* BirthDay Box */}
                <div className="birthDayBox">
                    <img src={gift} alt="no img" />
                    <span><b>Anas Iftikhar</b> and <b>3 other friends</b> have a birthday today</span>
                </div>

                {/* Add Image */}
                <img id="addImg" src={add} alt="no img" />
                {/* H4 */}
                <h4 id="onlineFrirendHeading">Online Friends</h4>

                {/* Friends list Container */}
                <ul className="onLineFriendsContainer">
                    {
                        Users.map((element)=>
                            <OnlineFriend key={element.id} friendData = {element}/>
                        )
                    }
                </ul>
            </div>
        </>
    )
}