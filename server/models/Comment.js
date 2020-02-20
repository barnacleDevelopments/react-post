const mongoose = require("mongoose")
const autopopulate = require("mongoose-autopopulate")
const mongooseToJson = require("@meanie/mongoose-to-json")

const Schema = mongoose.Schema

const CommentsSchema = new Schema({ 
    posterName: String,
    content: String,
    postId: String
})

CommentsSchema.plugin(mongooseToJson)
CommentsSchema.plugin(autopopulate)

module.exports = mongoose.model("comments", CommentsSchema)