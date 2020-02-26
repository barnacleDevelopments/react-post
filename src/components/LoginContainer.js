import React from "react"
import { useAuth0 } from "../react-auth0-spa";

//components 
import RegisterForm from "./RegisterForm"


const LoginContainer = props => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        <button onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </div>
  );
}

export default LoginContainer