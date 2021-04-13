const express = require("express");
const router = express.Router();

const topicModel = require("../models/imagetopic.model");

router.get('/', (req, res) => {

    res.status('200').render("pages/index");

})


router.get("/:id", (req, res) => {
    const topicid = req.params.id;
    // console.log(topicid);
    topicModel.deleteImageById(topicid, (err, result) => {

        if (err) {
            console.log(err);
            res.status(500).send("unable to perform required action please try after some time", err);
        } else {
            topicModel.getAllData((err, result) => {
                if (err) {
                    res.status(500).send("unable to perform required action please try after some time", err);
                } else {
                    res.status(200).render("pages/topicimg", { message: " Topic Image  deleted successfully", data: result });
                }
            })

        }

    })

})

module.exports = router;