
const express = require("express")
const userRegistration = require("../controller/UserRegistration")
const checkEmail = require("../controller/CheckEmail")
const checkPassword = require("../controller/CheckPassword")
const fetchUser = require("../controller/FetchAllUsers")

const router = express.Router()

//User Registration API Endpoint
router.post("/registration",userRegistration)

//Check Email API Endpoint
router.post("/checkemail", checkEmail)

//Check Password API Endpoint
router.post("/checkpassword", checkPassword)

//Fetch User API Endpoint
router.get("/fetchuser", fetchUser)


module.exports = router