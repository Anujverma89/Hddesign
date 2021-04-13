const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

const login = require('../models/admin.model')

router.get('/', (req, res, next) => {

    const Token = !req.cookies.jwtToken;

    if (Token == true) {
        res.status(301).redirect('/login');
    } else if (Token == false) {
        Tokenvalue = req.cookies.jwtToken;
        let verifiedToken = jwt.verify(Tokenvalue, 'verify');
        login.getAdminListByEmail(verifiedToken.subject, (err, result) => {
            if (err) {
                res.status(500).send("internal server error")
                return;
            } else {

                if (result.length == 0) {
                    res.status(300).redirect('/login');
                    return;
                } else {
                    next();
                    return;
                }
            }
        })

    } else {
        res.status(300).redirect('/login');

    }



})

module.exports = router;