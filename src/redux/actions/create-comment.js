import { postActions } from "../action-types"
import axios from "axios"

const createComment = (comment, postId) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/posts/${postId}/comments/create`, comment)
        .then(data => {
            dispatch({
                type: postActions.CREATE_COMMENT,
                payload: data.data
            })
        })  
    }
}

export default createComment