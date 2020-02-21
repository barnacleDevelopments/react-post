import React from "react"
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <ul className="nav">
            <li>
                <Link to="/feed">Feed</Link>
            </li>

            <li>
                <Link to="/users">Profile</Link>
            </li>
        </ul>
    )
}

export default Nav