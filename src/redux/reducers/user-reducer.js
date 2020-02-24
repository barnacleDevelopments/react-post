import { userActions } from "../action-types"

const defaultState = {}

const userReducer = (state = defaultState, action) => {
    switch(action.type) {
        case userActions.CREATE_USER:
            console.log(action.payload)
            return {...state, ...action.payload}

            default: return state
    }
}

export default userReducer