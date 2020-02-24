import React from "react"

const PostDetailsBar = (props) => {
    return (
      <div className="post-details-bar">
        <p>{props.postContent}</p>
      </div>
    )
  }

  export default PostDetailsBar