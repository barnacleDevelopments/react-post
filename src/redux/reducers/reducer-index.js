import { combineReducers } from "redux"
import postReducer from "../reducers/post-reducer"
import userReducer from "../reducers/user-reducer"

const reducerRoot = combineReducers({
    postReducer,
    userReducer
})

export default reducerRoot