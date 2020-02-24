const express = require("express")
const router = express.Router()
const User       = require("../models/User")

router.route("/").get((req, res, next) => {
    console.log("whatup")
    User.find({}, (err, users) => {
        if(err) {
            console.log(err)
        } else {
            res.send(users)
        }
    })
})

router.route("/users/create").post((req, res, next) => {
    console.log(req.body)
    let newUser = req.body
    User.create(newUser, (err, user) => {
        if(err) {
            console.log(err)
        } else {
            console.log(`New user created ${user._id}`)
        }
    })
})

router.route("/users/:id").get((req, res, next ) => {
    let userId = req.params.id
    User.findById(userId, (err, user) => {
        if(err) {
            console.log(err)
        } else {
            console.log(user)
            res.send(user)
        }
    })
})




module.exports = router

