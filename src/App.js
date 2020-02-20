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
              {props.posts.map(post => {
                  return <Post key={post.id} post={post}/>
              })}
            </PostContainer>
        </div>
    )
}


function mapStateToProps(state) {
    let posts = Object.keys(state.postReducer.entities.posts).map(key => state.postReducer.entities.posts[key])
    return {
        posts: posts
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