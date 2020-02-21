import React from "react"
import { connect } from "react-redux"

//components 
import Post from "./Post"
import PostForm from "./PostForm"

const PostContainer = (props) => {
    return (
        <div className="post-container">
             <PostForm />
                {props.posts.map(post => {
                    return <Post key={post.id} post={post}/>
                })}
        </div>
    )
}

function mapStateToProps(state) {
    let posts = Object.keys(state.postReducer.entities.posts).map(key => state.postReducer.entities.posts[key])
    return {
        posts: posts
    }
}




export default connect(mapStateToProps, null) (PostContainer)