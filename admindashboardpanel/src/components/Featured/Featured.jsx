import "./Featured.css"
import React from "react"
// Importing CircularProgressbar
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
// Material Ui Icons
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
export default function featured() {
    return (
        <>
            <div className="featuredCard">
                <div className="headAndIcon">
                    <p className="featuredPara">Total Revenue</p>
                    <MoreVertOutlinedIcon className="featuredIcon"/>
                </div>
                <div className="featuredCardContainer">
                    <div className="bar">
                        <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
                    </div>
                    <p className="featuredPara para1">Total Sales made today</p>
                    <h1>$420</h1>
                    <p className="simple">Previous transactions processing. Last payments may <br />not be included</p>
                    <div className="smallCardsSection">
                        <div className="smallCard">
                            <p>Target</p>
                            <div className="rating negative">
                                <KeyboardArrowDownOutlinedIcon className="featuredIcon"/>
                                <span>$12.4k</span>
                            </div>
                        </div>
                        <div className="smallCard">
                            <p>Last Week</p>
                            <div className="rating positive">
                                <KeyboardArrowUpOutlinedIcon className="featuredIcon"/>
                                <span>$12.4k</span>
                            </div>
                        </div>
                        <div className="smallCard">
                            <p>Last Month</p>
                            <div className="rating positive">
                                <KeyboardArrowUpOutlinedIcon />
                                <span>$12.4k</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}