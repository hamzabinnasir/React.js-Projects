import "./Contact.css"
import React from "react"
// Importing Components
import Headline from "../../components/Headline/Headline"
export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "b29ff959-e8d4-431f-b828-a8a67e6b6f38");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div id="contactSection">
                <Headline text={"Get"} subText={"In Touch"} />
                {/* Contact Container */}
                <div className="contactContainer">
                    <form onSubmit={onSubmit} className="form left">
                        <div className="fields">
                            <div className="nameAndEmail">
                                <input type="text" name="name" placeholder="name" required />
                                <input type="email" name="email" placeholder="email" required />
                            </div>
                            <textarea name="textarea" id="textarea" placeholder="write you message" required></textarea>
                        </div>
                        <button type="submit" id="sendBtn">send message</button>
                        <p className="result">{result}</p>
                    </form>
                    <div className="formContent right">
                        <div className="detail">
                            <h4>Email</h4>
                            <p>myselfhamzanasir@gmail.com</p>
                        </div>
                        <div className="detail">
                            <h4>phone</h4>
                            <p>+92 306 266 8181</p>
                        </div>
                        <div className="detail">
                            <h4>address</h4>
                            <p>Pakistan, Punjab, Faisalabad</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}