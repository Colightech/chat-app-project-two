
const userModel = require("../models/UserModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")

const checkPassword = async (req, res) => {

    try {
        const { userId, password } = req.body

        //Check Password
        const user = await userModel.findById(userId)
        const passCompare = await bcryptjs.compare(password, user.password)
        if (!passCompare) {
            return res.status(400).json({
                message : "Wrong Password",
                error : true,
            })
        }

        //Create Token
        const tokenData = {
            id : user._id,
            email : user.email,
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn : "1d"})

        //Return Response With Cookie
        const cookieOption = {
            http : true,
            secure : true,
        }

        return res.cookie("token", token, cookieOption).status(200).json({
            message : "Login Successfully",
            success : true,
            token : token,
            user,
        })


    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = checkPassword