import { postActions } from "../action-types"
import merge from "lodash.merge"
 
const postReducer = (state = {}, action) => {
    switch(action.type) {
    //modify posts
        case postActions.FETCH_POSTS:
            console.log(action.payload.entities)
            return {...state, ...action.payload.entities}
          
        
        case postActions.CREATE_POST:
            return {...state, [action.payload.id]: action.payload}
        
    //modify comments
        case postActions.CREATE_COMMENT:
            const post = state[action.payload.postId] 
            console.log(post)
            return {...state, [action.payload.postId]: {
                comments: post.comments.concat(action.payload.id)
            }  }
    
    // //add/remove thumbs ups
    //     case postActions.ADD_THUMB_UP:
    //         return state.map((post) => {
    //             if(post._id === action.id) {
    //                 post.thumbs += 1
    //             }
    //             return post
    //         })
    //     case postActions.REMOVE_THUMB_UP:
    //         return state.map((post) => {
    //             if(post._id === action.id) {
    //                 post.thumbs -= 1
    //             }
    //             return post
    //         })
        default:
            return state
    }
}

export default postReducer