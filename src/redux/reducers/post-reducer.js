"use strict"

import { postActions } from "../action-types"
import _ from "lodash"

const inititalState = {
    entities: {
        posts: {}, 
        comments: {}, 
    }
}
 
const postReducer = (state = inititalState, action) => {
    switch(action.type) {
    //modify posts
        case postActions.FETCH_POSTS:
            return {...state, ...action.payload}
          
        
        case postActions.CREATE_POST:
            return {...state, 
                entities: {
                    posts: {
                        ...state.entities.posts, [action.payload.id]: action.payload
                    },
                    comments: {
                        ...state.entities.comments
                    }
                }
            }   
        
    //modify comments
        case postActions.CREATE_COMMENT:
            const post = state.entities.posts[action.payload.postId]
            return {...state,
                entities: {
                    comments: {
                        ...state.entities.comments, [action.payload.id] : action.payload
                    },
                    posts:{
                    ...state.entities.posts,
                    [post.id] : {
                        content: post.content,
                        id: post.id,
                        thumbs: post.thumbs,
                        postId: action.payload.postId,
                        comments: [...post.comments, action.payload.id]

                    }
                }
            }
            }
    
    // //add/remove thumbs ups
        case postActions.ADD_THUMB_UP:
            let postId = state.entities.posts[action.id]
            if(action.isUp) {
                return {...state,
                    entities: {
                        comments: {
                            ...state.entities.comments
                        },
                        posts:{
                            ...state.entities.posts,
                            [postId.id]: {
                                content: postId.content,
                                id: postId.id,
                                thumbs: postId.thumbs + 1,
                                comments: [...postId.comments],
                                thumbStatus: action.isUp
                            }
                           
                        }
                    }
            }
            } else {
                return {...state,
                    entities: {
                        comments: {
                            ...state.entities.comments
                        },
                        posts:{
                            ...state.entities.posts,
                            [postId.id]: {
                                content: postId.content,
                                id: postId.id,
                                thumbs: postId.thumbs - 1,
                                comments: [...postId.comments],
                                thumbStatus: action.isUp
                            }
                           
                        }
                    }
            }
            }
     
        default:
            return state
    }
}

export default postReducer