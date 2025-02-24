const jwt = require("jsonwebtoken")
const userModel = require("../models/UserModel")

const getUserDetailFromToken = async (token) => {

    const decode = await jwt.verify(token, process.env.JWT_SECRET)
    const user = await userModel.findById(decode.id)

    return user

}

module.exports = getUserDetailFromToken