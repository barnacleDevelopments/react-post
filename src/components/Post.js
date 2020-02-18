import React, { useEffect, useState } from 'react';
import axios from "axios"
import { connect } from "react-redux"

// redux actions 
import getComments from "../redux/actions/get-comments"

//components
import ButtonBar from "../components/ButtonBar"
import PostDetailBar from  "../components/PostDetailBar"
import PostImage from  "../components/PostImage"
import CommentForm from "../components/CommentForm"
import CommentsList from "../components/CommentsList"

const Post = (props) => {

  function getPostComments(commentIds) {
    let comments = []
        props.comments.forEach(comment => {
          if(comment.postId === props.post.id) {
            
          }
        })
  }
 
  return (
    <div className="post">
      <PostImage />
      <PostDetailBar postContent={props.post.content}/>
      <ButtonBar thumbsCount={props.post.thumbs} id={props.post._id}/> 
      <CommentForm id={props.post.id}/>
      <CommentsList comments={props.post.comments}/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      comments: state.postReducer
  }
}

export default connect(mapStateToProps, null) (Post);
 