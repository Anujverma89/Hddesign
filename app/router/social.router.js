// importing all the necesseties

const express = require("express");
const router = express.Router();

const SocailController = require('../controllers/social.controller');


// get all route for social
router.get('/', SocailController.getAllSocail);


// post route for social
router.post('/', SocailController.createSocial);

// update data 
router.put('/:id', SocailController.updateData)

module.exports = router;