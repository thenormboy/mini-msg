const express = require('express')
const router = express.Router()
const msgController = require('../controllers/msgController')

router.get('/', msgController.msg_main)
router.post('/', msgController.msg_create_post)
router.get('/create', msgController.msg_create_get)

module.exports = router