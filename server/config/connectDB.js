
const mongoose = require("mongoose")

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGOOSE_CONNECTION,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // 10 seconds timeout
            socketTimeoutMS: 45000, // 45 seconds socket timeout
        })

        mongoose.connection.on("connected", () => {
            console.log("Mongoose  Connected")
        })

        mongoose.connection.on("error", (error) => {
            console.log("Mongoose Disconnected", error)
        })

    } catch (error) {
        console.log("Something went wrong", error)
    }
}

module.exports = connectDB