import React from "react"
import { connect } from "react-redux"

//actions 
import getComments from "../redux/actions/get-comments"

const Comment = props => {
    return (
        <div>{props.comment.content}</div>
    )
}

const CommentsList = (props) => {

    
    return (
        <ul className="comments-list">
            {props.comments.map((comment, idx) => {
                return <Comment key={idx} comment={comment} />
            })}
        </ul>
    )
}



const mapStateToProps = (state, currentProps ) => {
   return {
       comments:  currentProps.comments.map(key => state.postReducer.entities.comments[key])
   }
}

export default connect(mapStateToProps, null)(CommentsList)