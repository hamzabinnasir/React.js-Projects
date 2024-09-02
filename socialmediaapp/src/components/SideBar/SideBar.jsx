import "./SideBar.css"
import SideBarUser from "../SideBarUsers/SideBarUser";
import React from "react"
// React Icons
import { MdOutlineRssFeed } from "react-icons/md";
import { BsChatSquareTextFill } from "react-icons/bs";
import { BiSolidVideos } from "react-icons/bi";
import { MdGroups } from "react-icons/md";
import { IoBookmarkSharp } from "react-icons/io5";
import { BsQuestionSquare } from "react-icons/bs";
import { MdOutlineEmojiEvents } from "react-icons/md";


// Import User
import { Users } from "../Post/postData";

export default function SideBar() {
    return (
        <>
            <div className="sideBarSection">
                <ul>
                    <li>
                        <MdOutlineRssFeed className="listIcon" />
                        <h4>Feed</h4>
                    </li>
                    <li>
                        <BsChatSquareTextFill className="listIcon" />
                        <h4>Chats</h4>
                    </li>
                    <li>
                        <BiSolidVideos className="listIcon" />
                        <h4>Videos</h4>
                    </li>
                    <li>
                        <MdGroups className="listIcon" />
                        <h4>Groups</h4>
                    </li>
                    <li>
                        <IoBookmarkSharp className="listIcon" />
                        <h4>BookMarks</h4>
                    </li>
                    <li>
                        <BsQuestionSquare className="listIcon" />
                        <h4>Questions</h4>
                    </li>
                    <li>
                        <BsQuestionSquare className="listIcon" />
                        <h4>Jobs</h4>
                    </li>
                    <li>
                        <BsQuestionSquare className="listIcon" />
                        <h4>Jobs</h4>
                    </li>
                    <li>
                        <MdOutlineEmojiEvents className="listIcon" />
                        <h4>Events</h4>
                    </li>
                </ul>
                <button id="showMore">Show More</button>
                <div className="aboutBoxContainer">
                    {
                        Users.map((element) =>
                            <SideBarUser key={element.id} userData = {element}/>
                        )
                    }
                </div>
            </div>
        </>
    )
}