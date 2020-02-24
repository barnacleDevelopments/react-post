import React from "react"
import { Link } from "react-router-dom"

const ProfileTitle = props => {
    return (
        <div className="profile-title">
            <Link to="/feed"><button><i className="fas fa-arrow-left"></i></button></Link>
        </div>
    )
}

export default ProfileTitle