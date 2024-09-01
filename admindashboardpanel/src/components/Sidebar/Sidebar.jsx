import "./Sidebar.css"
import React from "react"
// Importing Link
import { Link } from "react-router-dom";
// Importing Materilal Ui Iocns
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalAirportIcon from '@mui/icons-material/LocalAirport';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

// Importing DarkMode Context and UseContext
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
export default function Sidebar(){
    const {dispatch} = useContext(DarkModeContext)
    return(
        <>
            <div className="sideBar">
                {/* Logo */}
                <div className="logo">
                    <h1><Link className="link" to={"/"}>Hamzadmin</Link></h1>
                </div>
                {/* Parent */}
                <div className="sidebarParent">
                    {/* listContainers */}
                <div className="listParent">
                    <span className="listHead">Main</span>
                    <ul>
                        <li>
                            <DashboardIcon className="icon"/>
                            <span className="para">Dashboard</span>
                        </li>
                    </ul>
                </div>

                <div className="listParent">
                    <span className="listHead">Lists</span>
                    <ul>
                        <li>
                            <PersonOutlineOutlinedIcon className="icon"/>
                            <span className="para"><Link className="link" to={"/users"}>Users</Link></span>
                        </li>
                        <li>
                            <LocalAirportIcon className="icon"/>
                            <span className="para"><Link className="link" to={"/products"}>Products</Link></span>
                        </li>
                        <li>
                            <CreditCardIcon className="icon"/>
                            <span className="para">Orders</span>
                        </li>
                        <li>
                            <LocalShippingIcon className="icon"/>
                            <span className="para">Delivery</span>
                        </li>
                    </ul>
                </div>

                <div className="listParent">
                    <span className="listHead">Useful</span>
                    <ul>
                        <li>
                            <InsertChartIcon className="icon"/>
                            <span className="para">Stats</span>
                        </li>
                        <li>
                            <NotificationsNoneIcon className="icon"/>
                            <span className="para">Notifications</span>
                        </li>
                    </ul>
                </div>

                <div className="listParent">
                    <span className="listHead">Service</span>
                    <ul>
                        <li>
                            <SettingsSystemDaydreamIcon className="icon"/>
                            <span className="para">System Health</span>
                        </li>
                        <li>
                            <PsychologyOutlinedIcon className="icon"/>
                            <span className="para">Logos</span>
                        </li>
                        <li>
                            <SettingsApplicationsRoundedIcon className="icon"/>
                            <span className="para">Settings</span>
                        </li>
                    </ul>
                </div>

                <div className="listParent">
                    <span className="listHead">User</span>
                    <ul>
                        <li>
                            <AccountCircleOutlinedIcon className="icon"/>
                            <span className="para">Profile</span>
                        </li>
                        <li>
                            <ExitToAppRoundedIcon className="icon"/>
                            <span className="para">Logout</span>
                        </li>
                    </ul>
                </div>

                {/* Box Container */}
                <div className="boxContainer">
                    <div className="box box1" onClick={()=>dispatch({type : "LIGHT"})}></div>
                    <div className="box box2" onClick={()=>dispatch({type : "DARK"})}></div>
                </div>
                </div>
            </div>
        </>
    )
}