import "./Testimonial.css"
import React, { useState } from "react"
// Importing Components
import Headline from "../../components/Headline/Headline"
// Importing Material Ui Icons
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Importing Data
import { slideData } from "./slidesData";
export default function Testimonial() {
    const [slide, setSlide] = useState(0);
    // Handle Previous and Handle Next functions
    const handlePrevious = () => {
        setSlide(slide === 0 ? slideData.length - 1 : slide - 1);
    }

    const handleNext = () => {
        setSlide(slide === slideData.length - 1 ? 0 : slide + 1);
    }

    const gotToSlide = (getCurrentIndex) => {
        setSlide(getCurrentIndex);
    }
    return (
        <>
            <div className="testmonialSection">
                <Headline text={"Client"} subText={"Testimonial"} />
                <div className="testimonialContainer">
                    {/* Testimonial Slider */}
                    <div className="testimonialSlider">
                        {/* Slider Container */}
                        <div className="testimonialSliderContainer" style={{ transform: `translateX(-${slide * 100}%)` }}>
                            {/* Testimonial Slides */}
                            {
                                slideData.map((slide) =>
                                    <div key={slide.id} className="slideParent">
                                        <div className="testimonialSlides">
                                            <span className="quote">“</span>
                                            <div className="slidesPara">
                                                {slide.para}
                                                {/* slidesProfileBox */}
                                            </div>
                                            <div className="slidesProfileBox">
                                                <img src={slide.img} alt="no img" />
                                                <h4>{slide.name}</h4>
                                                <span className="smallSlidePara">{slide.work}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>

                    {/* Slide Button and Pagination */}
                    <div className="slideBtnContainer">
                        <div className="arrow" onClick={handlePrevious} >
                            <ArrowBackIosIcon />
                        </div>
                        <div className="circleContainer">
                            {
                                slideData.map((circle, currentIndex) =>
                                    <div
                                        key={currentIndex}
                                        onClick={() => gotToSlide(currentIndex)}
                                        className={currentIndex === slide ? "circle circleActive" : "circle"}
                                    ></div>
                                )
                            }
                        </div>

                        <div className="arrow" onClick={handleNext}>
                            <ArrowForwardIosIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}