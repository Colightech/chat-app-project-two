
const userModel = require("../models/UserModel")


const fetchUser = async (req, res) => {

    try {

        const user = await userModel.find({}).select("-password")
        if (!user) {
            return res.status(400).json({
                message : "No User Available",
                error : true,
            })
        }

        return res.status(200).json({
            message : "All User Fetched",
            success : true,
            user,
        })

    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = fetchUser