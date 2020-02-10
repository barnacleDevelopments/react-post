import './App.css';
import React, { useEffect, useState } from "react"
import Post from "./components/Post"
import axios from "axios"

const App = () => {

    const [posts, setPosts] = useState([])

useEffect(() => {
    axios.get("http://localhost:5000/posts")
    .then(data => {
        setPosts(data.data)
    })

    .catch((err) => {
        console.log(err)
    })
}, [])

    return (
        <div>
            {posts.map((post, idx) => {
                return <Post key={idx} post={post}/>
            })} 
        </div>
    )
}

export default App