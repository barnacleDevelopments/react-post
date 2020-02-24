import React, {useState} from 'react';
import { connect } from "react-redux"

//components
import ButtonBar from "../components/ButtonBar"
import PostDetailBar from  "../components/PostDetailBar"
import PostImage from  "../components/PostImage"
import CommentForm from "../components/CommentForm"
import CommentsList from "../components/CommentsList"

const Post = (props) => {

  const [commentsIsOpen, setCommentsIsOpen] = useState(false)
 
 function toggleComments() {
  if(commentsIsOpen) {
    setCommentsIsOpen(false)
  } else {
    setCommentsIsOpen(true)
  }
 }
 console.log(props.comments.length)
  return (
    <div className="post">
      <PostImage />
      <PostDetailBar postContent={props.content}/>
      <ButtonBar toggleComments={toggleComments} thumbsCount={props.thumbs} commentsLength={props.comments.length} id={props.id}/> 
      <CommentForm toggleComments={toggleComments} id={props.id}/>
      {commentsIsOpen ? <CommentsList comments={props.comments}/> : <div></div>}
    </div>
  );
}

const mapStateToProps = (state, currentProps ) => {
  let post = state.postReducer.entities.posts[currentProps.post.id]

  return {
    comments: post.comments,
    content: post.content,
    thumbs: post.thumbs,
    id: post.id
  }
}


export default connect(mapStateToProps, null)(Post)
 