import "./NavLink.css"
import React from "react"
export default function NavLink({ data, id, navActive, setNavActive }) {
    return (
        <>
            <li onClick={() => setNavActive(id)}><a className={navActive === id ? "link navActive" : "link"} href={data.href}>{data.navText}</a></li>
        </>
    )
}