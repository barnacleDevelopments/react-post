const express = require("express")
const router = express.Router()

//models 
const Post = require("../models/Post")

mongoose.set('useFindAndModify', false);

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