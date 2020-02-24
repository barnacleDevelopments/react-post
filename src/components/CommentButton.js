import React from "react"

const CommentButton = (props) => {
  console.log(props.commentsLength)
    return (
      <button className="comment-btn" onClick={props.toggleComments}>
        <div className="count-display"><div>{props.commentsLength}</div></div>
        <div><i className="far fa-comment-dots"></i></div>
      </button>
    )
  }

  export default CommentButton