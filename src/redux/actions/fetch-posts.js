import { postActions } from "../action-types"
import { normalize, schema } from 'normalizr';

const fetchPosts = () => {
    return (dispatch) => {
        fetch("http://localhost:5000/posts")
        .then(data => data.json())
        .then(data => {
            const commentSchema = new schema.Entity("comments")

            const postSchema = new schema.Entity("posts", {
                comments: [commentSchema]
            })

            const postListSchema = [postSchema]
        
            const normalizedData = normalize(data, postListSchema)

            console.log(normalizedData)

            dispatch({
                type: postActions.FETCH_POSTS,
                payload: normalizedData

            })
        })
    }
}

export default fetchPosts