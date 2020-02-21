import React from "react"

//components 
import ProfileTitle from ".//ProfileTitle"
import UserNav from "./UserNav"
import UserDetails from "./UserDetails"
import UserFeed from "./UserFeed"

const UserContainer = props => {
    return (
        <div>
            <ProfileTitle />
            <UserDetails />
            <UserNav />
            <UserFeed />
        </div>
   
    )
}

export default UserContainer