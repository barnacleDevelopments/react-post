const express = require("express")
      mongoose = require("mongoose"),
      bodyParser = require("body-parser"),
      cors       = require("cors")

//models
const postRoutes = require("./routes/post-routes")
const app = express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

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


app.listen(port, () => {
    console.log(`Connect to port: ${port}`)
})
