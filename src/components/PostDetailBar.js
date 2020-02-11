import React from "react"

const PostDetailsBar = (props) => {
    return (
      <div className="post-details-bar">
        <h3>Heading</h3>
    <p>{props.postContent}</p>
      </div>
    )
  }

  export default PostDetailsBar