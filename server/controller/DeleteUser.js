const userModel = require("../models/UserModel")

const deleteUser = async (req, res) => {

    try {
        const { userId } = req.body

        const user = await userModel.findById(userId)
        if (!user) {
            return res.status(400).json({
                message : "User Does not Exist",
                error : true,
            })
        }

        await userModel.deleteOne(user._id)

        return res.status(200).json({
            message : "User Deleted Successfully",
            success : true,
        })

        
    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = deleteUser