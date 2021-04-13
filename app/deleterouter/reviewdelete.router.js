const express = require("express");
const app = require("../../app");
const router = express.Router();

const reviewModel = require("../models/review.model");

router.get('/', (req, res) => {

    res.status('200').render("pages/index");

})


router.get("/:id", (req, res) => {
    const Id = req.params.id;
    console.log(Id);
    reviewModel.deleteDataWithId(Id, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("unable to perform required action please try after some time", err);
        } else {
            reviewModel.getAllReviews((err, result) => {
                if (err) {
                    res.status(500).send("unable to perform required action please try after some time", err);
                } else {
                    res.status(200).render("pages/reviews", { message: " Review deleted successfully", data: result });
                }
            })

        }

    })

})

module.exports = router;