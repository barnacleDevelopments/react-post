import React from "react"
import { connect } from "react-redux"

//actions 
import getComments from "../redux/actions/get-comments"

const CommentsList = (props) => {



    return (
        <ul className="comments-list">
            {props.comments.map((comment, idx) => {
                return <li key={idx}><div>{comment}</div></li>
            })}
        </ul>
    )
}






export default CommentsList