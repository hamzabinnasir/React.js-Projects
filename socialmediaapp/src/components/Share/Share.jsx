import "./Share.css"
import image from "../assets/person/1.jpeg"

// React Icons
import { MdPermMedia } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { PiTagSimpleFill } from "react-icons/pi";

export default function Share() {
    return (
        <div className="shareCard">
            <div className="shareProfileContainer">
                <img src={image} alt="no img" />
                <input type="text" placeholder="What's in your mind Hamza" />
            </div>
            <div className="widgetAndButton">
                <div className="widgetsContainer">
                    {/* Widgets */}
                    <div className="widget">
                        <MdPermMedia className="widgetIcon" style={{ color: "red" }} />
                        <h5>Photos or Videos</h5>
                    </div>
                    <div className="widget">
                        <PiTagSimpleFill className="widgetIcon" style={{ color: "blue" }} />
                        <h5>tag</h5>
                    </div>
                    <div className="widget">
                        <IoLocation className="widgetIcon" style={{ color: "green" }} />
                        <h5>Location</h5>
                    </div>
                    <div className="widget">
                        <MdEmojiEmotions className="widgetIcon" style={{ color: "goldenrod" }} />
                        <h5>Feelings</h5>
                    </div>
                </div>
                <button id="shareBtn">Share</button>
            </div>
        </div>
    )
}