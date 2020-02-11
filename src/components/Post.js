import React, { useState, useEffect } from 'react';
import axios from "axios"

//components
import ButtonBar from "../components/ButtonBar"
import PostDetailBar from  "../components/PostDetailBar"
import PostImage from  "../components/PostImage"

const Post = (props) => {

  return (
    <div className="post">
      <PostImage />
      <PostDetailBar postContent={props.post.content}/>
      <ButtonBar  thumbsCount={props.post.thumbs}/> 
    </div>
  );
}

export default Post;
