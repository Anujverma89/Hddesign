// IMPORTING reuqire modules;

const Reviewmodel = require('../models/review.model');






// creating get all data review
exports.getAllReviews = (req, res) => {
    Reviewmodel.getAllReviews((err, result) => {
        if (err) {
            console.log(err);
            res.status(200).send(err);
        } else {
            if (result.length == 0) {
                res.status(200).send("no data found");
                return;
            }
            res.status(200).send(result);
        }
    })
}


// posting into database
exports.postDataIntoTable = (req, res) => {
    // let image = req['files'].Image;
    let image = req.files.Image;
    let Name = image.name;
    let newName = `${Date.now()}${Name}`
    const reviewData = req.body;
    const path = process.cwd() + `/public/images/${Date.now()}${Name}`;

    if (image.mimetype == "image/jpeg" || image.mimetype == "image/png") {
        image.mv(path, (err) => {
            if (err) {
                res.status(400).send("unable to move the file")
                console.log(err);
            } else {
                console.log(path);
                Reviewmodel.postDataIntoTable(reviewData, newName, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(400).send("Unable to isert data");
                        return;
                    } else {
                        res.status(200).send("inserted data successfuly");
                    }
                })
            }
        });

    } else {
        res.status(400).send("Only Jpg & png file type is allowed");
    }
}


// getting image with id 
exports.getReviewWithId = (req, res) => {
    Review_id = req.params.id;
    Reviewmodel.getReviewWithId(Review_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length == 0) {
                console.log("no data found");
                res.status(200).send("No data found");
            } else {
                res.status(200).send(result);
            }
        }

    })




}

// deleting review with id 
exports.deleteDataWithId = (req, res) => {
    Review_id = req.params.id;
    Reviewmodel.deleteDataWithId(Review_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send("no data found")
        } else {
            if (result.affectedRows == 0) {
                res.status(200).send("The data your are trying to delete could not be found")
            } else {
                res.status(200).send("data seleted successfully")
            }
        }
    })

}


// delete all data 
exports.deleteaAllData = (req, res) => {
    Reviewmodel.deleteAllData((err, result) => {
        if (err) {
            res.status(400).send("Failed to delete")
        } else {
            res.status(200).send("Data all deleted successfully")

        }

    })


}

exports.updateData = (req, res) => {
    const file = req.files.Image;
    const Name = file.name;
    const id = req.params.id;
    const reqData = req.body;
    const newName = `${Date.now()}${Name}`
    const path = process.cwd() + `/public/images/${Date.now()}${Name}`

    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        file.mv(path, (err) => {

            if (err) {
                console.log("unable to update")
            } else {
                Reviewmodel.updateData(id, reqData, newName, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status(400).send("failed to update")
                    } else {
                        if (result.affectedRows == 0) {
                            res.status(200).send("No rows matched")
                        } else {
                            res.status(200).send("Updated colum successfully");
                        }

                    }
                })

            }

        })
    }


}