import './App.css';
import React, { useEffect, useState } from "react"
import axios from "axios"

//components
import Post from "./components/Post"
import PostForm from "./components/PostForm"
import PostContainer from "./components/PostContainer"

const App = () => {

    const [posts, setPosts] = useState([])

useEffect(() => {
    axios.get("http://localhost:5000/posts")
    .then(data => setPosts(data.data))
    .catch(err => console.log(err))
}, [])

    return (
        <div className="App">
            <PostContainer>
            <PostForm />
                {posts.map((post, idx) => {
                    return <Post key={idx} post={post}/>
                })} 
            </PostContainer>
        </div>
    )
}

export default App