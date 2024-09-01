import "./Navbar.css";
import React, { useState, useEffect, useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const menuBoxRef = useRef(null);
    const [activeLink, setActiveLink] = useState("homeSection");

    const handleClick = () => {
        setIsSidebarOpen(true);
    };

    const handleLinkClick = (section) => {
        setActiveLink(section);
        setIsSidebarOpen(false);
    };

    useEffect(() => {
        const handleWindowClick = (event) => {
            if (menuBoxRef.current && !menuBoxRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        window.addEventListener("click", handleWindowClick);

        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset;

            if (currentScrollTop > 300) {
                setIsScrolled(currentScrollTop < lastScrollTop);
            } else {
                setIsScrolled(false);
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            <nav className={isScrolled ? "navbar white" : "navbar"}>
                <ul>
                    <li
                        className={activeLink === "homeSection" ? "active" : ""}
                        onClick={() => handleLinkClick("homeSection")}
                    >
                        <a className="link" href="#homeSection">Home</a>
                    </li>
                    <li
                        className={activeLink === "featuredSection" ? "active" : ""}
                        onClick={() => handleLinkClick("featuredSection")}
                    >
                        <a className="link" href="#featuredSection">Portfolio</a>
                    </li>
                    <li
                        className={activeLink === "resumeSection" ? "active" : ""}
                        onClick={() => handleLinkClick("resumeSection")}
                    >
                        <a className="link" href="#resumeSection">Resume</a>
                    </li>
                    <li
                        className={activeLink === "aboutSection" ? "active" : ""}
                        onClick={() => handleLinkClick("aboutSection")}
                    >
                        <a className="link" href="#aboutSection">About</a>
                    </li>
                    <li
                        className={activeLink === "contactSection" ? "active" : ""}
                        onClick={() => handleLinkClick("contactSection")}
                    >
                        <a className="link" href="#contactSection">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* SideBar */}
            <nav className="sideBar">
                <button 
                    ref={menuBoxRef}
                    onClick={handleClick} 
                    className={isSidebarOpen ? "menuBox outline" : "menuBox removeOutline"}
                >
                    <MenuIcon className="menuIcon" />
                </button>
                <ul className={isSidebarOpen ? "sideBarListContainer display" : "sideBarListContainer"}>
                    <li><a className="link" href="#homeSection" onClick={() => handleLinkClick("homeSection")}>Home</a></li>
                    <li><a className="link" href="#featuredSection" onClick={() => handleLinkClick("featuredSection")}>Portfolio</a></li>
                    <li><a className="link" href="#resumeSection" onClick={() => handleLinkClick("resumeSection")}>Resume</a></li>
                    <li><a className="link" href="#aboutSection" onClick={() => handleLinkClick("aboutSection")}>About</a></li>
                    <li><a className="link" href="#contactSection" onClick={() => handleLinkClick("contactSection")}>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}
