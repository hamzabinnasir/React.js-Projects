import "./Register.css"
import React, { useRef, useState } from "react"
export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleEmail = () => {
        setEmail(emailRef.current.value);
    }

    const handlePassword = () => {
        setPassword(passwordRef.current.value)
    }
    return (
        <>
            <div className="registerSection">
                {/* TopBar */}
                <div className="topBar">
                    <img id="registerLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="no img" />
                    <button id="signInRegister">Sign In</button>
                </div>
                {/* Register Content */}
                <div className="registerContent">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <h3>Ready to watch? Enter to create or restart your membership</h3>
                    {
                        !email ?
                            <div className="searchBox">
                                <input ref={emailRef} type="email" placeholder="email address" />
                                <button onClick={() => handleEmail()} id="searchBoxBtn">Get Started</button>
                            </div>
                            :
                            <form className="searchBox">
                                <input ref={passwordRef} type="password" placeholder="password" />
                                <button onClick={() => handlePassword()} id="searchBoxBtn">Start</button>
                            </form>
                    }
                </div>
            </div>
        </>
    )
}

