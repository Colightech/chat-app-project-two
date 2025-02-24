const getUserDetailFromToken = require("../helper/GetUserDetailFromToken")

const getUserDetail = async (req, res) => {

    try {
        const token = req.cookies.token || ""
        if (!token) {
            return res.status(400).json({
                message : "Session Out",
                logout : true,
            })
        }

        const user = await getUserDetailFromToken(token)

        return res.status(200).json({
            message : "Got User Detail Successfully",
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

module.exports = getUserDetail