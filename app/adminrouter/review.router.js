const express = require('express');
const router = express.Router();
const auth = require('./auth.router');
const Reviewmodel = require('../models/review.model');

router.get('/', auth, (req, res) => {

    Reviewmodel.getAllReviews((err, result) => {
        if (err) {
            console.log(err);
            res.status(200).send(err);
        } else {
            if (result.length == 0) {
                res.status(200).render('pages/reviews', { message: "No Data Found"})
                return;
            }
            res.status(200).render('pages/reviews', { message: "", data: result })
        }
    })


})


module.exports = router;

