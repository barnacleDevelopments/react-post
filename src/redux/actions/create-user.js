import { userActions } from "../action-types"
import axios from "axios"

const createUser = (newUser) => {
    return (dispatch) => {
        axios.post(`http://localhost:5000/users/create`, newUser)
        .then(data => {
            dispatch({
                type: userActions.CREATE_USER,
                payload: newUser
            })
        })
        .catch(err => console.log(err))
    }
}

export default createUser