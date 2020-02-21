const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")

//models 
const Post = require("../models/Post")
const Comment = require("../models/Comment")

mongoose.set('useFindAndModify', false);

//get all posts

router.route("/").get((req, res, next) => {
    Post.find({}, (err, posts) => {
                if(err) {
                    console.log(err)
                } else {
                    posts.forEach(post => {
                       
                        console.log(post)
                    })
                    res.send(posts)
                }
            })
    })
    

router.route("/create").post((req, res, next) => {
    let post = {}
    post.content = req.body["content"]
    post.thumbs  = req.body.thumbs

    Post.create(post, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Post created: ${data}`)
            res.send(data)
        }
    })
})


// Post.create({
//     content: "Stuff",
//     thumbs: 0 
// })
//======================
//post content
//======================

//add and remove likes from post
router.route("/:id").put((req, res, nest) => {
    let newThumbs = req.body
    Post.findByIdAndUpdate(req.params.id, newThumbs, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`Thumbs up added to ${req.params.id}`)
        }
    })

})


router.route("/:id/comments/create").post((req, res, next) => {
    const commentInfo = {
        posterName: "Lucy",
        content: req.body["content"],
        postId: req.params.id
    } 

    console.log(req.body)

    Comment.create(commentInfo, (err, comment) => {
        if(err) {
            console.log(err)
        } else {
            res.send(comment)
        }

        Post.findById(req.params.id, (err, post) => {
            if(err) {
                console.log(err)
            } else {
                post.comments.push(comment)
                post.save((err, data) => {
                    if(err) {
                        console.log(`${err} When creating comment`)
                    
                    } else {
                        console.log(`Comment ID added to database: ${comment}`)
                       
                    }
                })
            }
        })
    })
})



module.exports = router