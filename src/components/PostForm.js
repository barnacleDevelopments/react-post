import React, { useState } from "react"
import { connect } from "react-redux"
import createPost from "../redux/actions/create-post"

const PostForm = (props) => {

    const [fields, setFields] = useState({})

    function handleFormSubmit(e) {
        e.preventDefault()
        let post = fields
        post.thumbs = 0
        post.comments = []
        props.createNewPost(post)
        createPost(post)
    }

    function handleFormInput(e) {
        let fields = {}
            fields[e.target.name] = e.target.value
            setFields(fields)
    }

    return (
        <div className="post-form">
            <form onChange={handleFormInput}>
                <div className="form-user-icon"></div>
                    <div className="form-content">
                        <input className="post-content-input" type="text-area" name="content"/>
                       <div className="form-btn-bar">
                        <div>
                            <input type="file" name="post-images"/>
                            <button>GIF</button>
                            <button>CHART</button>
                            <button>EMOJI</button>
                        </div>
                       
                        <div>
                            <button onClick={handleFormSubmit}>Submit</button>
                        </div>
                       </div>
                    </div>
            </form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
            createNewPost: (post) => {
                dispatch(createPost(post))
            }
        }
    }

export default connect(null, mapDispatchToProps)(PostForm)