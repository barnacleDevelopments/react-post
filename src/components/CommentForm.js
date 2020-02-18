import React, { useState } from "react"
import axios from "axios"
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
        <div className="comment-form">
        <h3>Comment:</h3>
            <form>
                <input name="content" onChange={handleFormInput}></input>
                <button onClick={handleFormSubmit}>Submit</button>
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