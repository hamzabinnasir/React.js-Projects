import "./About.css";
import React from "react";
// Importing Components
import Headline from "../../components/Headline/Headline";
import CV from "../../assets/CV/CV.pdf"
import ProfileImg from "../../assets/images/MyselfHamzaNasir.jfif"

export default function About() {
    // Function to handle "Hire Me" button click
    const handleHireMeClick = () => {
        // Redirect to your LinkedIn or Fiverr profile
        window.location.href = "https://www.linkedin.com/in/hamza-nasir-771161287/";
        // Alternatively, for Fiverr:
        // window.location.href = "https://www.fiverr.com/yourprofile/";
    };

    return (
        <>
            <div id="aboutSection">
                <div className="aboutContainer">
                    <img
                        id="mySelfHamza"
                        src= {ProfileImg}
                        alt="no img"
                        // https://preview.colorlib.com/theme/rezume/images/image_1.jpg
                    />
                    <div className="aboutContent">
                        <Headline text={"About"} subText={"Me"} />
                        <p className="aboutSimpleP">
                            I’m a frontend developer with a knack for creating responsive, user-friendly websites using HTML, CSS, and JavaScript.
                        </p>
                        <p className="smallPara">
                            I specialize in React.js and GSAP to build interactive, dynamic web applications. My goal is to deliver clean, efficient code and a superior user experience.
                        </p>
                        {/* Button Container */}
                        <div className="btnContainer">
                            <button id="hireBtn" onClick={handleHireMeClick}>Hire Me</button>
                            <button id="downloadBtn"><a className="link" href={CV} download>download cv</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
