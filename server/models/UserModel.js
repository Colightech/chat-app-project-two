
const mongoose = require("mongoose")

const userSchemal = new mongoose.Schema({
    name : {
        type : String,
        require : "Name is required"
    },
    email : {
        type : String,
        require : "Email is required",
        unique : true,
    },
    password : {
        type : String,
        require : "Password is required",
    },
    profile_pic : {
        type : String,
        default : ""
    },
},{
    timestamps : true,
})

const userModel = mongoose.model("User", userSchemal)

module.exports = userModel