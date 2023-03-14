const express = require("express")
const router = express.Router()
const admin = require('../controller/adminController/adminController')
const uploadImage = require('../config/cloudinary')
const adminAuthentication = require('../middleware/jwtVerification')

router.post('/login',admin.postLogin)
router.get('/members',adminAuthentication.verifyAdminToken,admin.getMember)
router.post('/addgenre',adminAuthentication.verifyAdminToken,admin.addGenre)
router.get('/genre',adminAuthentication.verifyAdminToken,admin.getGenre)
router.post('/addauction',uploadImage,adminAuthentication.verifyAdminToken,admin.addAuction)
router.get('/auction',adminAuthentication.verifyAdminToken,admin.getAuction)
router.get('/genreauction',adminAuthentication.verifyAdminToken,admin.getGenreAuction)
router.post('/block/:id',adminAuthentication.verifyAdminToken,admin.postBlock)
router.post('/unblock/:id',adminAuthentication.verifyAdminToken,admin.postUnBlock)
router.post('/blockgenre/:id',adminAuthentication.verifyAdminToken,admin.postBlockGenre)
router.post('/unblockgenre/:id',adminAuthentication.verifyAdminToken,admin.postUnBlockGenre)


module.exports = router