import React, { useEffect, useRef } from "react"
import { connect } from "react-redux"
import axios from "axios"

//actions 
import addThumbUp from "../redux/actions/add-thumb-up"
import removeThumbUp from "../redux/actions/remove-thumb-up"

//components
import CommentButton from "../components/CommentButton"
import EmailButton from  "../components/EmailButton"
import HeartButton from  "../components/HeartButton"
import RetweetButton from  "../components/RetweetButton"

const ButtonBar = (props) => {

  const currentThumbCount = useRef(props.thumbsCount)
  
  function modThumb() {
    console.log(props.thumbsCount)
    console.log(currentThumbCount.current)

    if(currentThumbCount.current === props.thumbsCount) {
      axios.put(`http://localhost:5000/posts/${props.id}`, {thumbs: props.thumbsCount + 1 })
      .catch(err => console.log(err))
      props.addThumb(props.id)
    } else {
      console.log("hello")
      axios.put(`http://localhost:5000/posts/${props.id}`, {thumbs: props.thumbsCount - 1 })
      .catch(err => console.log(err))
      props.removeThumb(props.id)
    }
  }

    return (
      <div className="post-btn-bar">
        <div className="post-btns">
         <CommentButton />
         <HeartButton addThumbFunction={modThumb} thumbsCount={props.thumbsCount} />
         <RetweetButton />
         <EmailButton />
         </div>
         <hr />
         <div className="poster-alias">
            <h4>Jon Doe</h4>
         </div>
      </div>
    )
  }

  function mapStateToProps(state) {
    return {
      post: state.postReducer
    }
  }


  function mapDispatchToProps(dispath) {
    return {
      addThumb: (id) => {
        dispath(addThumbUp(id))
      },
      removeThumb: (id) => {
        dispath(removeThumbUp(id))
      }
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps) (ButtonBar)

