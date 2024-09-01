import "./New.css"
import React from "react"
// Importing Components
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
// Importing Material Ui Icons
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
export default function New({ inputLeft, inputRight, title }) {
    return (
        <>
            <div className="newSection">
                <Sidebar />
                <div className="newWrapper">
                    <Navbar />
                    <div className="newContainer">
                        {/* Add New */}
                        <div className="addNew">
                            <h1>{title}</h1>
                        </div>
                        {/* Form Container */}
                        <div className="formContainer">
                            {/* Form Container Left */}
                            <div className="formContainerLeft">
                                <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="no img" />
                            </div>
                            {/* Form Container Right */}
                            <div className="formContainerRight">
                                {/* Form Wrapper */}
                                <div className="formWrapper">
                                    {/* Form Wrapper Left */}
                                    <div className="formWrapperLeft">
                                        <div className="inputField">
                                            <label id="fileUpload" htmlFor="file">
                                                Image : <DriveFolderUploadOutlinedIcon className="fileIcon"/>
                                            </label>
                                            <input type="file" id="file"/>
                                        </div>
                                        {
                                            inputLeft.map((element1) =>
                                                <div key={element1.id} className="inputField">
                                                    <label htmlFor={element1.htmlFor}>{element1.label}: {element1.icon}</label>
                                                    <input type={element1.type} id={element1.inputId} placeholder={element1.placeholder}/>
                                                </div>
                                            )
                                        }
                                    </div>
                                    {/* Form Wrapper Right */}
                                    <div className="formWrapperRight">
                                        {
                                            inputRight.map((element2) =>
                                                <div key={element2.id} className="inputField">
                                                    <label htmlFor={element2.htmlFor}>{element2.label}</label>
                                                    <input id={element2.inputId} type={element2.type} placeholder={element2.placeholder} />
                                                </div>
                                            )
                                        }

                                    </div>
                                </div>

                                {/* Send Button */}
                                <button id="sendBtn">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}