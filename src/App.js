import './App.css';
import React, { useEffect} from "react"
import { connect } from "react-redux"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

//actions
import fetchPosts from "./redux/actions/fetch-posts"

//components
import PostContainer from "./components/PostContainer"
import LoginContainer from "./components/LoginContainer"
import Navbar from "./components/Navbar"
import Nav from "./components/Nav"
import UserContainer from "./components/UserContainer"


const App = (props) => {

    useEffect(() => {
        props.getAllPosts()
    }, [])

    console.log(props.posts)
      return (
        <div className="App">
            <Router>
                

                <Navbar>
                    <Nav />
                </Navbar>

                    <Switch>

                        <Route exact path="/">
                            <LoginContainer  />
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

export default connect(null, mapDispatchToProps) (App)