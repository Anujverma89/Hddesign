const express = require("express");
const app = require("../../app");
const router = express.Router();

const adminmodel = require("../models/admin.model");

router.get('/', (req, res) => {

    res.status('200').render("pages/index");

})


router.get("/:id", (req, res) => {
    const Id = req.params.id;
    console.log(Id);
    adminmodel.deleteAdminById(Id, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("unable to perform required action please try after some time", err);
        } else {
            adminmodel.fetchAllAdmins((err, result) => {
                if (err) {
                    res.status(500).send("unable to perform required action please try after some time", err);
                } else {
                    res.status(200).render("pages/admin", { message: " admin deleted successfully", data: result });
                }
            })

        }

    })

})




module.exports = router;