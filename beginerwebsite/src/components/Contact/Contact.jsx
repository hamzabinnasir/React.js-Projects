import "./Contact.css"
import React from "react"
export default function Contact() {
    return (
        <>
            <div className="contactSection">
                <div className="contactLeft">
                    <div className="contactLeftContent">
                        <h1>Questions?</h1>
                        <h1>Let's Get in Touch</h1>
                        <form className="inputAndTextArea">
                            <div className="inputContainer">
                                <input name="name" type="text" placeholder="Your Name" />
                                <input name="email" type="text" placeholder="Your Email" />
                                <input name="subject" type="text" placeholder="Subject" />
                            </div>
                            <div className="textAreaContainer">
                                <textarea name="message" id="textarea" placeholder="Your Message"></textarea>
                                <button type="submit" id="sendBtn">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="contactRight">
                    <div className="logoAndPara">
                        <img src="https://github.com/safak/youtube/blob/react-website/src/img/map.png?raw=true" alt="no img" />
                        <p>125 Park Avenue St., New York, USA</p>
                    </div>
                    <div className="logoAndPara">
                        <img src="https://github.com/safak/youtube/blob/react-website/src/img/phone.png?raw=true" alt="no img" />
                        <p>125 Park Avenue St., New York, USA</p>
                    </div>
                    <div className="logoAndPara">
                        <img src="https://github.com/safak/youtube/blob/react-website/src/img/send.png?raw=true" alt="no img" />
                        <p>125 Park Avenue St., New York, USA</p>
                    </div>
                </div>
            </div>
        </>
    )
}