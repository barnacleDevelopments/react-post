import { combineReducers } from "redux"
import postReducer from "../reducers/post-reducer"

const reducerRoot = combineReducers({
    postReducer
})

export default reducerRoot