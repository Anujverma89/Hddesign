const express = require("express");
const app = require("../../app");
const router = express.Router();

const imageModel = require("../models/image.model");

router.get('/', (req, res) => {

    res.status('200').render("pages/index");

})


router.get("/:id", (req, res) => {
    const Id = req.params.id;
    console.log(Id);
    imageModel.deleteImageById(Id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("unable to perform required action please try after some time", err);
        } else {
            imageModel.getAllImageData((err, result) => {
                if (err) {
                    res.status(500).send("unable to perform required action please try after some time", err);
                } else {
                    res.status(200).render("pages/image", { message: " Image deleted successfully", data: result });
                }
            })

        }

    })

})

module.exports = router;