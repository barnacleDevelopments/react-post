import React, { Fragment } from "react"

// Auth 
import { useAuth0 } from "../react-auth0-spa";

//components 
import ProfileTitle from ".//ProfileTitle"
import UserNav from "./UserNav"
import UserDetails from "./UserDetails"
import UserFeed from "./UserFeed"

const UserProfile = props => {

  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ProfileTitle user={user} />
      <UserDetails />
      <UserNav />
      <UserFeed />
    </div>

  )
}

export default UserProfile