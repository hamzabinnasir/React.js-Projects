import "./Hero.css"
import React, { useEffect, useRef } from "react"
import { init } from 'ityped'
export default function Hero() {
    const headingRef = useRef();
    useEffect(() => {
        init(headingRef.current,
            {
                showCursor: false,
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 1200,
                strings: ['Hamza Bin Nasir', 'Frontend Developer', 'Free Lancer', 'Content Creator']
            });
    }, []);
    return (
        <>
            <div className="heroSection">
                <h1 className="light">Hello, I'm</h1>
                <div className="typeHead">
                    <h1 className="bold"><span ref={headingRef}></span><span className="itypeCursor">|</span></h1>
                </div>
                <p className="heroP">And this is my Resume</p>

                {/* Anim Button */}
                <a className="link" href="#featuredSection">
                    <div className="nextSecContainer">
                        <div className="nextSec">
                            <div className="dot"></div>
                        </div>
                        <span className="scroll">Scroll</span>
                    </div>
                </a>
            </div>
        </>
    )
}