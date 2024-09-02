import "./Post.css"
import React , {useState} from "react"
// Images
import likeImg from "../assets/post/like.png"
import heart from "../assets/post/heart.png"

// dummy data
import { Users } from "./postData"

// react icons
import { CiMenuKebab } from "react-icons/ci";
export default function Post({ post }){

    const [like , setLike] = useState(post.like)
    const [isLiked , setIsLiked] = useState(false);

    const likeHandler = () =>{
        setIsLiked(!(isLiked));
        setLike(isLiked ? like - 1 : like + 1);
    }

    return (
        // Post Card
        <div className="postCard">
            {/* Profile Box */}
            <div className="profileBox">
                <img src={Users.filter((userId) =>
                    userId.id === post.userId
                )[0].profilePicture} alt="no img" />
                <h5>{Users.filter((userId) =>
                    userId.id === post.userId
                )[0].username}</h5> <span>{post.date}</span>
                {/* Profile Icon */}
                <CiMenuKebab className="profileIcon" />
            </div>
            <p className="firstPostPara">{post.desc}</p>
            {/* Profile Image */}
            <img id="postImg" src={post.photo} alt="no img" />

            {/* Icons and Comments */}
            <div className="iconsAndComments">
                <div className="imgsAndLiking">
                    <img onClick={likeHandler} src={likeImg} alt="no img" />
                    <img src={heart} alt="no img" />
                    <p>{like} people like it</p>
                </div>
                <p className="comments">{post.comment} Comments</p>
            </div>
        </div>
    )
}