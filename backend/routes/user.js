const express = require("express")
const router = express.Router()
const user = require('../controller/userController/userController')
// const admin = require('../controller/adminController/adminController')

router.get("/login",user.getLogin)
router.post("/login",user.postLogin)
// router.get("/signup",user.getSignup)
router.post("/signup",user.postSignup)
router.post('/verifyotp',user.verifyOtp)
router.post('/resendotp',user.resendOtp)



module.exports = router