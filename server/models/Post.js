const mongoose = require("mongoose")

const Schema = mongoose.Schema

const PostSchema = new Schema({
    content: String,
    thumbs: Number,
    retweets: {
        count: Number
    },
    comment: {
        title: String,
        content: String
    },
    email: String,
})

module.exports = mongoose.model("Post", PostSchema)