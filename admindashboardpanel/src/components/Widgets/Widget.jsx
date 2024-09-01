import "./Widget.css"
import React from "react"
// Importing Materila Ui Icons
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
export default function Widget({ type }) {
    let data;
    switch (type) {
        case "user":
            data = {
                title: "users",
                link: "See all users",
                icon: <PersonOutlinedIcon className="widgetIcon" style={{color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",}}/>,
            };
            break;
        case "order":
            data = {
                title: "orders",
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon className="widgetIcon" style={{color : "goldenrod" , backgroundColor : "rgba(218, 165, 32, 0.2)"}}/>,
            };
            break;
        case "earning":
            data = {
                title: "earnings",
                link: "View net earnings",
                icon: <MonetizationOnOutlinedIcon className="widgetIcon"  style={{color : "green" , backgroundColor : "rgba(0, 128, 0, 0.2)"}}/>,
            }
            break;
        case "balance":
            data = {
                title: "balance",
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon className="widgetIcon" style={{backgroundColor : "rgba(128, 0, 128, 0.2)" , color : "purple"}}/>,
            }
            break;
        default:
            break;
    }
    return (
        <>
            <div className="widgetCard">
                <div className="userAndPercent">
                    <p>{data.title}</p>
                    <div className="widgetIcons">
                        <KeyboardArrowUpOutlinedIcon />
                        <span>20 %</span>
                    </div>
                </div>
                <h1>$100</h1>
                <div className="underlineDiv">
                    <p>{data.link}</p>
                    {data.icon}
                </div>
            </div>
        </>
    )
}