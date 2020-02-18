import './App.css';
import React, { useEffect} from "react"
import { connect } from "react-redux"

//actions
import fetchPosts from "./redux/actions/fetch-posts"

//components
import Post from "./components/Post"
import PostForm from "./components/PostForm"
import PostContainer from "./components/PostContainer"

const App = (props) => {

    useEffect(() => {
        props.getAllPosts()
        
    }, [])

    console.log(props.posts)
      return (
        <div className="App">
            <PostContainer>
            <PostForm />
              {Object.keys(props.posts).map(post => {
                  return <Post key={post} post={props.posts[post]} postComments={props.comments} />
              })}
            </PostContainer>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        posts: state.postReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPosts: () => {
            dispatch(fetchPosts())
        }
    }
   
}

export default connect(mapStateToProps, mapDispatchToProps) (App)