
const userModel = require("../models/UserModel")


const checkEmail = async (req, res) => {

    try {
        const { userId, email } = req.body

        const checkEmail = await userModel.findById(userId).select("-password")
        if (!checkEmail) {
            return res.status(400).json({
                message : `User ${email} does not exist`
            })
        }

        return res.status(200).json({
            message : "Email Checked Successfully",
            success : true,
            checkEmail,
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = checkEmail