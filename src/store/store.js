import { createStore, applyMiddleware, compose } from "redux"
import reducerRoot from "../redux/reducers/reducer-index"
import thunk from "redux-thunk"

const middleware = [thunk]

const Store = createStore(
    reducerRoot, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
        )
)

export default Store 