const express = require('express');
const router = express.Router();

const GalleryModel = require("../models/imagetopic.model");

router.get("/", (req, res) => {

    GalleryModel.getAllData((err, result) => {
        if (err) {
            res.status(500).send("internal server Error", err);
        } else {
            if (result.length == 0) {
                res.status(200).send("No data found");
            } else {
                res.status(200).send(result);
            }

        }
    })

})

module.exports = router;







