import React from 'react';
import { connect } from "react-redux"

//components
import ButtonBar from "../components/ButtonBar"
import PostDetailBar from  "../components/PostDetailBar"
import PostImage from  "../components/PostImage"
import CommentForm from "../components/CommentForm"
import CommentsList from "../components/CommentsList"

const Post = (props) => {

 
  return (
    <div className="post">
      <PostImage />
      <PostDetailBar postContent={props.post.content}/>
      <ButtonBar thumbsCount={props.post.thumbs} id={props.post._id}/> 
      <CommentForm id={props.post.id}/>
      <CommentsList comments={props.comments}/>
    </div>
  );
}

const mapStateToProps = (state, currentProps ) => {

  let comments
  comments = state.postReducer.entities.posts[currentProps.post.id].comments

  return {
    comments: comments
  }
}


export default connect(mapStateToProps, null)(Post)
 