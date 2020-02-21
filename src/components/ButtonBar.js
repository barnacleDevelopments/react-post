import React from "react"

//components
import CommentButton from "../components/CommentButton"
import EmailButton from  "../components/EmailButton"
import HeartButton from  "../components/HeartButton"
import RetweetButton from  "../components/RetweetButton"

const ButtonBar = (props) => {

    return (
      <div className="post-btn-bar">
        <div className="post-btns">
         <CommentButton />
         <HeartButton thumbsCount={props.thumbsCount} id={props.id} />
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


  export default ButtonBar
