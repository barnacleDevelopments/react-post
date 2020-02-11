import React, { useState, useEffect } from 'react';
import axios from "axios"

//components
import ButtonBar from "../components/ButtonBar"
import PostDetailBar from  "../components/PostDetailBar"
import PostImage from  "../components/PostImage"

const Post = (props) => {

  const post = props.post

  const [thumbsUps, setThumbsUps]                       = useState()
  const [comments, setComments]                         = useState(0)
  const [retweets, setRetweets]                         = useState(0)

  useEffect(() => {
    setThumbsUps(post.thumbs)
  }, [])

  function thumbsUp() {
    if(post.thumbs === thumbsUps) {
      setThumbsUps(thumbsUps + 1)
      console.log(thumbsUps)
      axios.put(`http://localhost:5000/posts/${post._id}`, {thumbs: thumbsUps + 1 })
      .then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    } else {
      setThumbsUps(thumbsUps - 1)
      let thumb = thumbsUp -1
      axios.put(`http://localhost:5000/posts/${post._id}`, {thumbs: thumbsUps - 1 })
      .then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      })
    }
  }

  // function commentUp() {
  //     if(currentStateThumbs === thumbsUps) {
  //       setThumbsUps(thumbsUps + 1)
  //     } else {
  //       setThumbsUps(thumbsUps - 1)
  //     }
  // }
  // function retweetUp() {
  //   if(currentStateThumbs === thumbsUps) {
  //       setThumbsUps(thumbsUps + 1)
  //   } else {
  //       setThumbsUps(thumbsUps - 1)
  //   }
  // }
 


  return (
    <div className="post">
      <PostImage />
      <PostDetailBar  />
      <ButtonBar thumbsCountFunction={thumbsUp} thumbsCount={thumbsUps}/> 
    </div>
  );
}

export default Post;
