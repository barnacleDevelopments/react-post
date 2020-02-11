import React from "react"

const PostContainer = (props) => {
    return (
        <div className="post-container">
            {props.children}
        </div>
    )
}

export default PostContainer