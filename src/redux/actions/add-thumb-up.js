import { postActions } from "../action-types"
import axios from "axios"

const addThumbUp = (id, isUp, currentCount) => {
// axios.put(`http://localhost:5000/posts/${props.id}`, {thumbs: props.thumbsCount + 1 })


  // axios.put(`http://localhost:5000/posts/${props.id}`, {thumbs: props.thumbsCount - 1 })

    if(isUp) {
        return (dispatch) => {
            dispatch({
                type: postActions.ADD_THUMB_UP,
                id,
                isUp,
                currentCount
            })
            axios.put(`http://localhost:5000/posts/${id}`, {thumbs: currentCount + 1})
            .catch(err => console.log(err))
        }
    } else {
        return (dispatch) => {
            dispatch({
                type: postActions.ADD_THUMB_UP,
                id,
                isUp,
                currentCount
            })
            axios.put(`http://localhost:5000/posts/${id}`, {thumbs: currentCount - 1})
            .catch(err => console.log(err))
        }
    }
   
        
    
}

export default addThumbUp