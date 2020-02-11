import React from "react"

const PostForm = () => {
    return (
        <div className="post-form">
            <form>
                <div className="form-user-icon"></div>
                    <div className="form-content">
                        <div className="form-text-area" contentEditable="true"></div>
                       <div className="form-btn-bar">
                        <div>
                            <button>IMG</button>
                            <button>GIF</button>
                            <button>CHART</button>
                            <button>EMOJI</button>
                        </div>
                       
                        <div>
                            <input type="submit" />
                        </div>
                       </div>
                    </div>
            </form>
        </div>
    )
}

export default PostForm