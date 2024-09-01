import React, { useRef, useState } from "react"
import "./List.css"
// Materil Ui Icons
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// Importing Components
import ListItem from "../ListItem/ListItem";
export default function List() {
    const containerRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    const [isMoved , setIsMoved] = useState(false);
    const handleClick = (direction) => {
        // the distance should be written inside the function
        let distance = containerRef.current.getBoundingClientRect().x - 50;
        if (direction === "left" && slideNumber > 0) {
            containerRef.current.style.transform = `translateX(${230 + distance}px)`;
            setSlideNumber(slideNumber - 1);
            setIsMoved(true);
        } else if (direction === "right" && slideNumber < 5) {
            containerRef.current.style.transform = `translateX(${-230 + distance}px)`;
            setSlideNumber(slideNumber + 1);
            setIsMoved(true);
        }
    };
    return (
        <>
            <div className="listSection">
                <h3>Continue to watch</h3>
                <div className="listParent">
                    <ArrowBackIosNewIcon className={isMoved ? "arrow leftArrow" : "arrow leftArrow display"} onClick={() => handleClick("left")} />
                    <div className="container" ref={containerRef}>
                        <ListItem index = {0}/>
                        <ListItem index = {1}/>
                        <ListItem index = {2}/>
                        <ListItem index = {3}/>
                        <ListItem index = {4}/>
                        <ListItem index = {5}/>
                        <ListItem index = {6}/>
                        <ListItem index = {7}/>
                        <ListItem index = {8}/>
                        <ListItem index = {9}/>
                    </div>
                    <ArrowForwardIosIcon className="arrow rightArrow" onClick={() => handleClick("right")} />
                </div>
            </div>
        </>
    )
}