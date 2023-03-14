const express = require("express")
const router = express.Router()
const user = require('../controller/userController/userController')
// const admin = require('../controller/adminController/adminController')

const userAuthentication = require('../middleware/jwtVerification')


router.get("/login",user.getLogin)
router.post("/login",user.postLogin)
router.post("/signup",user.postSignup)
router.post('/verifyotp',user.verifyOtp)
router.post('/resendotp',user.resendOtp)
router.post('/useredit',user.editUser)
router.get('/getuserdetails',userAuthentication.verifyUserToken,user.getUserDetails)
router.post('/membershippayment',userAuthentication.verifyUserToken,user.postPayment)
router.post('/verifypayment',userAuthentication.verifyUserToken,user.verifyPayment)



module.exports = router