import React from "react"
import { connect } from "react-redux"

//actions 
import getComments from "../redux/actions/get-comments"

const CommentsList = (props) => {

    function getPostComments(commentIds) {
        commentIds.forEach(id => {

        })
    }

    return (
        <ul className="comments-list">
            {props.comments.map((comment, idx) => {
                return <li key={idx}><div>{comment}</div></li>
            })}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        comments: state.postReducer
    }
}




export default connect(mapStateToProps, null) (CommentsList)