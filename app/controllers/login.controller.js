// require login model
const jwt = require('jsonwebtoken');
const { router } = require('../../app');
const loginModel = require('../models/admin.model');

exports.adminLogin = (req, res) => {
    const loginData = req.body;

    loginModel.userLogin(loginData, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err)
            return;
        } else {
            if (result == "noData") {
                res.status(400).render('pages/login', { message: "seems like your are not registered" })
                return;

            }
            if (result == "wrong") {
                // res.status(401).send("Sorry email or passowrd is wrong")
                res.status(402).render('pages/login', { message: "email or password is wrong" })


            } else {

                let payLoad = { subject: loginData.Email };
                console.log(payLoad);
                const jwtToken = jwt.sign(payLoad, 'verify');
                let cookie = res.cookie('jwtToken', jwtToken, { maxAge: 1000000, httpOnly: true })
                res.redirect('/manage')
            }


        }
    })


}
exports.loginPage = (req, res) => {
    res.status(200).render('pages/login', { message: "" });
}