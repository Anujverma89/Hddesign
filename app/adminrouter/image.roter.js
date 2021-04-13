const express = require('express');
const router = express.Router();

const auth = require('./auth.router');

const getImageData = require('../models/image.model');


router.get('/', auth, (req, res) => {
    getImageData.getAllImageData((err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("internal server error")
        } else {

            res.status(200).render('pages/image', { message: "", data: result });
        }

    })

})

module.exports = router;