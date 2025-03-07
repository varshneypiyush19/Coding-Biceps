const express = require("express")
const router =  express.Router()

const {
    login,
    signup,
    checkUser
} = require("../controllers/userControllers")

router.post("/login" , login)
router.post("/signup" , signup)
router.post("/checkuser" , checkUser)

module.exports = router