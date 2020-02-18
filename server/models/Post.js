const mongoose = require("mongoose")
const autopopulate = require("mongoose-autopopulate")
const mongooseToJson = require("@meanie/mongoose-to-json")

const Schema = mongoose.Schema

const PostSchema = new Schema({
    content: String,
    image: String,
    thumbs: Number,
    retweets: {
        count: Number
    },
    comments: [{type: Schema.Types.ObjectId, ref: "comments", autopopulate: true}],
    email: String
})

PostSchema.plugin(autopopulate)
PostSchema.plugin(mongooseToJson)


module.exports = mongoose.model("post", PostSchema)