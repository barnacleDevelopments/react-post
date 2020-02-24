const express = require("express")
      mongoose = require("mongoose"),
      bodyParser = require("body-parser"),
      cors       = require("cors"),
      fileUpload = require("express-fileupload")


//routes
const postRoutes = require("./routes/post-routes")
const userRoutes = require("./routes/user-routes")
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use(fileUpload())

mongoose.set('useFindAndModify', false);

mongoose.connect("mongodb://127.0.0.1:27017/mediaPost",  { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log(`connected to database!`)
}).catch(()=> {
    console.log(`error connecting to database!`)
})

app.get("/", (req, res, next) => {
    res.send("Welcome to node!")
})

app.use("/posts", postRoutes)
app.use("/users", userRoutes)


app.listen(port, () => {
    console.log(`Connect to port: ${port}`)
})
