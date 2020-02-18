import { postActions } from "../action-types"
import Axios from "axios"

const createPost = (payload) => {
    return (dispatch) => {
       Axios.post(`http://localhost:5000/posts/create`, payload)
       .then(data => {
        dispatch({
            type: postActions.CREATE_POST,
            payload: data.data
        })
       })
    }
}

export default createPost