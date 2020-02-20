import { postActions } from "../action-types"

const addThumbUp = (id, ThumbState) => {
    return {
        type: postActions.ADD_THUMB_UP,
        id,
        ThumbState
    }
}

export default addThumbUp