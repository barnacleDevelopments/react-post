import { postActions } from "../action-types"

const addThumbUp = (id) => {
    return {
        type: postActions.ADD_THUMB_UP,
        id
    }
}

export default addThumbUp