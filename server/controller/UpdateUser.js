const getUserDetailFromToken = require("../helper/GetUserDetailFromToken")
const userModel = require("../models/UserModel")

const updateUser = async (req, res) => {

    try {
        const { name, profile_pic } = req.body

        const token = req.cookies.token || ""
        if (!token) {
            return res.status(400).json({
                message : "Session Out",
                logout : true,
            })
        }

        const user = await getUserDetailFromToken(token)
        await userModel.updateOne({_id : user._id},{
            name,
            profile_pic,
        })

        const updatedUser = await userModel.findById(user._id)

        return res.status(200).json({
            message : "User Updated Successfully",
            success : true,
            updatedUser,
        })
        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = updateUser