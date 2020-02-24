const mongoose = require("mongoose")
const autoPopulate = require("mongoose-autopopulate")
const mongooseToJson = require("@meanie/mongoose-to-json")

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: String,
    password: String,
    name: String,
    profileImage: String
})

UserSchema.plugin(autoPopulate)
UserSchema.plugin(mongooseToJson)



module.exports = mongoose.model("User", UserSchema)