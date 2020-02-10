import React, { useState, useEffect } from 'react';
import axios from "axios"

//components
import ButtonBar from "../components/ButtonBar"
import PostDetailBar from  "../components/PostDetailBar"
import PostImage from  "../components/PostImage"

const Post = (props) => {

  const post = props.post

  console.log(post)

  const [currentStateThumbs, setCurrentStateThumbs] = useState(post.thumbs)
  const [currentStateComments, setCurrentStateComments] = useState()
  const [currentStateRetweets, setCurrentStateRetweets] = useState()
  const [thumbsUps, setThumbsUps] = useState(post.thumbs)
  const [comments, setComments] = useState(0)
  const [retweets, setRetweets] = useState(0)

  useEffect(() => {
    setCurrentStateThumbs(thumbsUps)
  }, [])

  function thumbsUp() {
    if(currentStateThumbs === thumbsUps) {
      setThumbsUps(thumbsUps + 1)
    } else {
      setThumbsUps(thumbsUps - 1)
    }
  }

  function commentUp() {
      if(currentStateThumbs === thumbsUps) {
        setThumbsUps(thumbsUps + 1)
      } else {
        setThumbsUps(thumbsUps - 1)
      }
  }
  function retweetUp() {
    if(currentStateThumbs === thumbsUps) {
        setThumbsUps(thumbsUps + 1)
    } else {
        setThumbsUps(thumbsUps - 1)
    }
  }
 


  return (
    <div className="App">
      <PostImage />
      <PostDetailBar commentsCountFunction={commentUp} commentCount={currentStateComments} />
      <ButtonBar thumbsCountFunction={thumbsUp} thumbsCount={thumbsUps}/> 
    </div>
  );
}

export default Post;
