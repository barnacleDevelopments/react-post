import { postActions } from "../action-types"
 
const postReducer = (state = [], action) => {
    switch(action.type) {
        case postActions.ADD_THUMB_UP:
        return [...state]
    }

}