import "./Login.css"
import React from "react"
export default function Login() {
    return (
        <>
            <div className="loginSection">
                {/* TopBar */}
                <div className="loginTopBar">
                    <img id="loginLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="no img" />
                    <button id="loginBtn">Login</button>
                </div>
                {/* Login Content */}
                <div className="loginContent">
                    <h1>Sign In</h1>
                    <form id="signInForm">
                        <input type="email" placeholder="Email or PhoneNumber" />
                        <input type="password" placeholder="Password" />
                        <button id="signInBtn">Sign In</button>
                    </form>
                    <p className="newPara">New to Netflix? <span className="bold">Sign up now.</span></p>
                    <p className="captchaPara">This page is protected by Google reCAPTCHA to <br />ensure you're nopt a bot. <span className="learnMore">Learn More</span></p>
                </div>
            </div>
        </>
    )
}

