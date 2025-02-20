
const userModel = require("../models/UserModel")
const bcryptjs = require("bcryptjs")

const userRegistration = async (req, res) => {

    try {
        const { name, email, password, profile_pic } = req.body

        //Email Validation
        const emailNameRegex = /^[^\s@]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/;
        const emailRegex = /@.*\.[a-z]{2,}(?:\.[a-z]{2,})?$/;
        if (!emailNameRegex.test(email) || !emailRegex.test(email)) {
            return res.status(400).json({
                message : "Invalid Email Format",
                error : true,
            })
        }

        //Check if User Already Exist
        const userExist = await userModel.findOne({email})
        if (userExist) {
            return res.status(400).json({
                message : `User With ${email} Already Exist`
            })
        }

        //Validate Password Length and Srength
        const passSpecialRegex = /^[!@#$%^&*(),.?":{}|<>]/; // First character must be a special character
        const passUpperRegex = /[A-Z]/ // At Least One Uppercase Character
        const passNumberRegex = /[0-9]/ // Include At Least One Number
        if (password.length < 8 || !passSpecialRegex.test(password) || !passUpperRegex.test(password) || !passNumberRegex.test(password)) {
            return res.status(400).json({
                message : "Password must be 8 character Long, with at least one special character, number and  uppercase latter",
                error : true,
            })
        }

        //Password Encryption
        const salt = await bcryptjs.genSalt(10)
        const passEncrypt = await bcryptjs.hash(password, salt)

        const payload = {
            name,
            email,
            password : passEncrypt,
            profile_pic,
        }

        const newUser = new userModel(payload)
        const user = await newUser.save()

        return res.status(201).json({
            message: "User Registered Successfully",
            success: true,
            data : {
                id: user._id,
                email: user.email,
            }
        })


    } catch (error) {
        return res.status(500).json({
            message : error.message || error,
            error : true,
        })
    }
}

module.exports = userRegistration