import React, { useState } from "react"
import { connect } from "react-redux"
import createComment from "../redux/actions/create-comment"

const CommentForm = (props) => {

    const [fields, setFields] = useState({})
    
    function handleFormInput(e) {
        let fields = {}
        fields[e.target.name] = e.target.value
        setFields(fields)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        let comment = fields
        comment.posterName ="Sarah"
        props.createNewComment(comment, props.id)
    }


    return (
        <div className="comment-form" onSubmit={handleFormSubmit}>
            <form>
                <input placeholder="Write a comment..." name="content" onChange={handleFormInput}></input>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        createNewComment: (comment, id) => {
            dispatch(createComment(comment, id))
        }
    }
}




export default connect(null, mapDispatchToProps) (CommentForm)