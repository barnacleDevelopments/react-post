import React from "react"

const HeartButton = (props) => {
    return (
      <div className="heart-btn">
        <div className="count-display"><div>{props.thumbsCount}</div></div>
        <div ><i className="fas fa-thumbs-up"></i></div>
      </div>
    )
  }

  export default HeartButton