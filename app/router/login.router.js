const express = require("express");
const router = express.Router();

const loginController= require('../controllers/login.controller');

router.post('/',loginController.adminLogin)
router.get('/',loginController.loginPage)



module.exports = router;