import { postActions } from "../action-types"

const getComments = (comments) => {
    return {
        type: postActions.GET_COMMENTS,
        comments,
    }
}

export default getComments