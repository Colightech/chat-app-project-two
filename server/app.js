
const express = require("express")
const cors = require("cors")
const router = require("./routes/router")


const app = express()

app.use(express.json())
app.use(express.urlencoded())

app.use(cors({
    origin : process.env.FRONTEND_URL,
    Credential : true,
}))

//ALL API End Point
app.use('/api', router)

//Global Error Handling
app.use((err, req, res, next) => {
    console.log("Eerror:", err.stack)
    res.status(500).json({
        message: "Something went wrong", err: err.message
    })
})

module.exports = app