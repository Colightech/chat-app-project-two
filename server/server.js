
require("dotenv").config()
const port = process.env.PORT || 8000
const app = require("./app")
const connectDB = require("./config/connectDB")



app.get("/", (req, res) => {
    return res.send(`Express Server Running on Port: ${port}`)
})



const startServer = async () => {
     try {
        // Database Connection
        await connectDB()
        console.log("Database Connected Successfully")

        //Server Connection
        app.listen(port, () => {
            console.log(`Server Running on Port: ${port}`)
        })

     } catch (error) {
        console.log("Something went wrong", error)
        process.exit(1)
     }
}

startServer()