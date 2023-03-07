const express = require("express")
const router = express.Router()
const admin = require('../controller/adminController/adminController')

router.get('/members',admin.getMember)
router.post('/addgenre',admin.addGenre)
router.get('/genre',admin.getGenre)


module.exports = router