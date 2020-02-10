const express = require("express")
const router = express.Router()

//models 
const Post = require("../models/Post")

router.route("/").get((req, res, next)=> {
    console.log("eee")
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

module.exports = router