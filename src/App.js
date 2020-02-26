import './App.css';
import React, { useEffect } from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// Auth
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history"


//actions
import fetchPosts from "./redux/actions/fetch-posts"

//components
import PostContainer from "./components/PostContainer"
import LoginContainer from "./components/LoginContainer"
import Navbar from "./components/Navbar"
import Nav from "./components/Nav"
import UserProfile from "./components/UserProfile"
import UserContainer from "./components/UserContainer"


const App = (props) => {

  const { loading } = useAuth0();

  useEffect(() => {
    props.getAllPosts()
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(props.posts)
  return (
    <div className="App">
      <Router history={history}>
        <Navbar>
          <Nav />
        </Navbar>

        <Switch>

          <Route exact path="/">
            <LoginContainer />
          </Route>

          <Route path="/feed">
            <PostContainer />
          </Route>

          <Route path="/users">
            <UserContainer />
          </Route>

        </Switch>

      </Router>
    </div>
  )
}


function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: () => {
      dispatch(fetchPosts())
    }
  }

}

export default connect(null, mapDispatchToProps)(App)