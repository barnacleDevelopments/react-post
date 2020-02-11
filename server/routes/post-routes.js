const express = require("express")
const router = express.Router()

//models 
const Post = require("../models/Post")

mongoose.set('useFindAndModify', false);

//get all posts
router.route("/").get((req, res, next)=> {
    Post.find({}, (err, data) => {
        if(err) {
            console.log(err)
            res.redirect("/")
        } else {
            console.log(data)
            res.send(data)
        }
    })
})

router.route("/create").post((req, res, next) => {
    let post = {}
    post.content = req.body["post-content"]
    Post.create(post, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
    

})


//======================
//post content
//======================

//add and remove likes from post
router.route("/:id").put((req, res, nest) => {
    let newThumbs = req.body
    console.log(req.body)
    Post.findByIdAndUpdate(req.params.id, newThumbs, (err, data) => {
        if(err) {
            console.log(err)
        } else {
            
        }
    })

})

module.exports = router