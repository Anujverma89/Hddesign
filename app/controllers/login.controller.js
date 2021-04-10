// require login model

const loginModel = require('../models/admin.model');

exports.adminLogin = (req, res) => {
    const loginData = req.body;

    loginModel.userLogin(loginData, (err, result) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
            if (result == "noData") {
                res.status(400).send("Seems like your are not registered")
                return;

            }
            if (result == "wrong") {
                res.status(401).send("Sorry email or passowrd is wrong")

            } else {
                res.status(200).send(result);
            }


        }
    })


}