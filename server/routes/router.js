
const express = require("express")
const userRegistration = require("../controller/UserRegistration")
const checkEmail = require("../controller/CheckEmail")
const checkPassword = require("../controller/CheckPassword")
const fetchUser = require("../controller/FetchAllUsers")
const getUserDetail = require("../controller/GetUserDetail")
const logOut = require("../controller/LogOut")
const updateUser = require("../controller/UpdateUser")
const deleteUser = require("../controller/DeleteUser")


const router = express.Router()

//User Registration API Endpoint
router.post("/registration",userRegistration)

//Check Email API Endpoint
router.post("/checkemail", checkEmail)

//Check Password API Endpoint
router.post("/checkpassword", checkPassword)

//Fetch User API Endpoint
router.get("/fetchalluser", fetchUser)

//Get User Detail API Endpoint
router.get("/getuserdetails", getUserDetail)

//Log Out API Endpoint
router.post("/logout", logOut)

//Update User Detail API Endpoint
router.post("/updateuserdetail", updateUser)

//Delete User API Endpoint
router.post("/deleteuser", deleteUser)


module.exports = router