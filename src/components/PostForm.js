import React, { useState } from "react"
import axios from "axios"

const PostForm = (props) => {

    const [fields, setFields] = useState({})

    function handleFormSubmit(e) {
        e.preventDefault()
        let post = fields
        createPost(post)
        
    }

    function handleFormInput(e) {
        let fields = {}
        fields[e.target.name] = e.target.value
        setFields(fields)
    }

    function createPost(post) {
        axios.post("http://localhost:5000/posts/create", post)
        .then(data => console.log(data))
    }

    return (
        <div className="post-form">
            <form onChange={handleFormInput}>
                <div className="form-user-icon"></div>
                    <div className="form-content">
                        <div className="form-text-area" contentEditable="true"></div>
                        <input type="text-area" name="post-content"/>
                       <div className="form-btn-bar">
                        <div>
                            <button>IMG</button>
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

export default PostForm