import "./List.css"
import React from "react"
export default function List({ listData, id, active, setActive }) {
    return (
        <>
            <li onClick={() => setActive(id)} className={active === id ? "featuredList featureActive" : "featuredList"}>{listData.listText}</li>
        </>
    )
}