import React from "react"
import { connect } from "react-redux"
import addThumbUp from "../redux/actions/add-thumb-up"

const HeartButton = (props) => {

function addThumb() {
  console.log(props.id)
  let post = props.posts[props.id]
  if(!post.thumbStatus) {
      props.addThumbUp(props.id, true, post.thumbs)
  } else {
    props.addThumbUp(props.id, false, post.thumbs)
  }

}

    return (
      <button className="heart-btn" onClick={addThumb}>
        <div className="count-display"><div>{props.thumbsCount}</div></div>
        <div ><i className="fas fa-thumbs-up"></i></div>
      </button>
    )
  }

  const mapStateToProps = (state) => {
    return {
      posts: state.postReducer.entities.posts
    }
  }

  export default connect(mapStateToProps, { addThumbUp })(HeartButton)