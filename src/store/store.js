import React from "react"
import { createStore } from "redux"
import reducerRoot from "../redux/reducers/reducer-index"

const Store = createStore(reducerRoot)

export default Store 