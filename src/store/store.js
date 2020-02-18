import React from "react"
import { createStore, applyMiddleware } from "redux"
import reducerRoot from "../redux/reducers/reducer-index"
import thunk from "redux-thunk"

const Store = createStore(reducerRoot, applyMiddleware(thunk))

export default Store 