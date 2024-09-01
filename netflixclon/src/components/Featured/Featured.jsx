import "./Featured.css"
import React from "react"
// Material ui icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
export default function Featured({ type }) {
    return (
        <>
            <div className="featuredSection">
                <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="no img" />
                {/* Select Menu */}
                {
                    type ?
                    <div className="selectMenu">
                    <h1>{type}</h1>
                    <select name="action" id="action">
                        <option className="option" value="action">Action</option>
                        <option className="option" value="adventure">Adventure</option>
                        <option className="option" value="comedy">Comedy</option>
                        <option className="option" value="crime">Crime</option>
                        <option className="option" value="fantasy">Fantasy</option>
                        <option className="option" value="horror">Horror</option>
                        <option className="option" value="historical">Historical</option>
                        <option className="option" value="romanse">Romanse</option>
                        <option className="option" value="scific">Sci-fiv</option>
                        <option className="option" value="thriller">Thriller</option>
                        <option className="option" value="western">Western</option>
                        <option className="option" value="animation">Animation</option>
                        <option className="option" value="drama">Drama</option>
                        <option className="option" value="documentary">Documentary</option>
                    </select>
                </div>
                :
                ""
                }
                {/* Contant Div */}
                <div className="featuredContent">
                    <img id="matrixImg" src="https://occ-0-1432-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABUZdeG1DrMstq-YKHZ-dA-cx2uQN_YbCYx7RABDk0y7F8ZK6nzgCz4bp5qJVgMizPbVpIvXrd4xMBQAuNe0xmuW2WjoeGMDn1cFO.webp?r=df1" alt="no img" />
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae <br />
                        adipisci repellendus eum quasi illo, velit numquam, maxime tempora <br />
                        sint deleniti, aliquid qui? Facilis, adipisci! Ratione hic <br /> repudiandae
                        temporibus eum earum?</p>
                    <div className="featuredBtnContainer">
                        <button className="playBtn">
                            <PlayArrowIcon /> play
                        </button>
                        <button className="infoBtn">
                            <InfoOutlinedIcon /> info
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}