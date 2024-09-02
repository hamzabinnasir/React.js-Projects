import "./Feed.css"
import Share from "../Share/Share"
import Post from "../Post/Post"
import { Posts } from "../Post/postData"

export default function Feed(){
    return(
        <div className="wrapper">
            <Share/>
            {
                Posts.map((element)=>
                    <Post key={element.id} post = {element} />
                )
            }
        </div>
    )
}