// this is the manage router dont get confused with manage and index
const customermodel = require('../models/customerlead.model')
// const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
// const login = require('../models/admin.model')
const auth = require('./auth.router');




router.get("/", auth, (req, res) => {
    customermodel.getcutomerlist((err, customerlist) => {
        if (err) {
            console.log("unbale to fetch data error in controlller");
            res.status(500).send(err);
        } else {
            if (customerlist.length == 0) {
                res.status(200).render('pages/index', { message: "No Data Found" })
                return;
            }
            res.status(200).render('pages/index', { message: "", data: customerlist });
        }

    })

})


module.exports = router;


