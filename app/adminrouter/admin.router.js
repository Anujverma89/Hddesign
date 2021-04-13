const express = require('express');
const router = express.Router();
const Adminlist1 = require('../models/admin.model');
const jwt = require('jsonwebtoken');

const auth = require('./auth.router');

router.get('/', auth, (req, res) => {
    Adminlist1.fetchAllAdmins((err, adminlist) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            if (adminlist.length == 0) {
                res.status(200).render('pages/admin', { message: "No data found", data: adminlist })
                return;
            } else {
                res.status(200).render('pages/admin', { message: '', data: adminlist });
            }
        }

    })




})


// post request form admin panel

router.post("/", (req, res) => {
    const admindata = req.body;
    const email = req.body.Email;
    const pass1 = req.body.Password;
    const Cpass = req.body.confirmPassword;

    console.log(admindata)
    if (pass1 !== Cpass) {
        Adminlist1.fetchAllAdmins((err, adminlist) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                if (adminlist.length == 0) {
                    res.status(200).render('pages/admin', { message: "No data found", data: adminlist })
                    return;
                } else {
                    res.status(200).render('pages/admin', { message: "Password is not matching", data: adminlist })
                }
            }

        })


    } else {

        Adminlist1.createAdminlist(admindata, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else if (result == false) {
                Adminlist1.fetchAllAdmins((err, adminlist) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        if (adminlist.length == 0) {
                            res.status(200).render('pages/admin', { message: "No data found", data: adminlist })
                            return;
                        } else {
                            res.status(400).render("pages/admin", { message: "Email is taken try new email", data: adminlist });
                            return;
                        }
                    }

                })


            }
            else {

                // console.log(result);
                console.log(email)
                const payload = { subject: email };
                let jwtToken = jwt.sign(payload, 'verify');
                const cookie = res.cookie('jwtToken', jwtToken, { maxAge: 1000000, httpOnly: true })
                console.log(cookie);

                Adminlist1.fetchAllAdmins((err, adminlist) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    else {
                        if (adminlist.length == 0) {
                            res.status(200).render('pages/admin', { message: "No data found", data: adminlist })
                            return;
                        } else {
                            res.status(200).render('pages/admin', { message: 'Admin list created Successfully', data: adminlist });
                            return;
                        }
                    }

                })


            }
        })
    }

})

module.exports = router;