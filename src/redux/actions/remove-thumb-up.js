import { postActions } from "../action-types"

const removeThumbUp = (id) => {
    return {
        type: postActions.REMOVE_THUMB_UP,
        id
    }
}

export default removeThumbUp