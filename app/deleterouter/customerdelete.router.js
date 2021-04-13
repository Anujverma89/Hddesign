const express = require('express');
const router = express.Router();

const customerModel = require("../models/customerlead.model");

router.get('/', (req, res) => {

    res.status('200').render("pages/index");

})


router.get("/:id", (req, res) => {
    const Id = req.params.id;
    console.log(Id);
    customerModel.deleteCustomerById(Id, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("unable to perform required action please try after some time", err);
        } else {
            customerModel.getcutomerlist((err, result) => {
                if (err) {
                    res.status(500).send("unable to perform required action please try after some time", err);
                } else {
                    res.status(200).render("pages/index", { message: " Customer deleted successfully", data: result });
                }
            })

        }

    })

})

module.exports = router;