// importing the necessary requirements

const { rawListeners } = require('../dbconfig/db');
const Imagemodel = require('../models/image.model');
const imageModel = require('../models/image.model');


// get all image data;
exports.getAllImageData = (req, res) => {

    imageModel.getAllImageData((err, result) => {

        if (err) {
            console.log(err);
            res.status(200).send(err);
        } else {
            if (result == 0) {
                console.log("no data found")
                res.status(200).send("No data found");

            } else {
                console.log(result);
                res.status(200).send(result);
            }
        }
    })


}

// posting image into image table

exports.postImageData = (req, res) => {
    const file = req.files.Imageurl;
    console.log(file);
    const Name = file.name;
    const newName = `${Date.now()}${Name}`;
    const imageData = req.body;
    const path = process.cwd() + `/public/images/${newName}`

    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        file.mv(path, (err) => {
            if (err) {
                console.log(err);
            } else {

                imageModel.postImageData(imageData, newName, (err, result) => {
                    if (err) {
                        console.log(err);
                        res.status.send("Could not store data", err)
                    }
                    else {
                        res.status(200).send("data insrted into table successfully");
                    }
                })



            }
        })

    }
}


// get image data with id;
exports.getDataWithId = (req, res) => {
    const Image_id = req.params.Id;
    imageModel.getImageById(Image_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length === 0) {
                res.status(200).send("no data foound");
                return;
            }
            else {
                res.status(200).send(result);
            }

        }

    })
}

// delete image with it;

exports.deleteImageById = (req, res) => {
    Image_id = req.params.Id;
    Imagemodel.deleteImageById(Image_id, (err, result) => {
        if (err) {
            console.log(err);
            res.status(200).send(err);
        } else {
            if (result.affectedRows === 0) {
                console.log("no data found");
                res.send("no data found")
                return;
            }
            console.log(result);
            res.status(200).send("successfully deleted id");
        }

    })


}


// delete all data 
exports.deleteaAllData = (req, res) => {
    Imagemodel.deleteAllData((err, result) => {
        if (err) {
            res.status(400).send("Failed to delete")
        } else {
            res.status(200).send("Data all deleted successfully")

        }

    })


}


exports.updateData = (req, res) => {
    const file = req.files.Imageurl;
    console.log(file);
    const Name = file.name;
    const newName = `${Date.now()}${Name}`;
    const imageData = req.body;
    const path = process.cwd() + `/public/images/${newName}`

    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        file.mv(path, (err) => {
            if (err) {
                console.log(err);
            } else {

                const id = req.params.id;
                const reqData = req.body;
                Imagemodel.updateData(id, reqData, newName, (err, result) => {
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