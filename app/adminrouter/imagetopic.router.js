const express = require('express');
const router = express.Router();
const controller = require('../controllers/imagetopic.controller');
const auth = require('./auth.router');




router.get('/', auth, controller.getAllImageData);

router.post('/',controller.postImageData)

module.exports = router;