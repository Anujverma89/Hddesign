// importing the necessary requirements
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
                res.status(200).send('No data found')
            } else {
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
                        res.status(500).send("Could not store data", err)
                    }
                    else {
                        imageModel.getAllImageData((err, result) => {
                            if (err) {
                                console.log(err);
                                res.status(500).send("internal server error")
                            } else {

                                res.status(200).render('pages/image', { message: "Image created successfully", data: result });
                            }

                        })
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
                res.status(200).render('pages/image', { message: "No image found" });
                return;
            }
            else {
                res.status(200).render('pages/image', { message: result });
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
                res.status(200).render('pages/image', { message: "No image found" });
                return;
            }
            console.log(result);
            res.status(200).render('pages/image', { message: "Deleted item successfully" });
        }

    })


}


// delete all data 
exports.deleteaAllData = (req, res) => {
    Imagemodel.deleteAllData((err, result) => {
        if (err) {
            res.status(500).send("Internal server error|| Failed to delete")
        } else {
            res.status(200).render('pages/image', { message: "Deleted data successully" });

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
                        res.status(500).send("internal server error || failed to update")
                    } else {
                        if (result.affectedRows == 0) {
                            res.status(200).render('pages/image', { message: "No rows matched" });
                        } else {
                            res.status(200).render('pages/image', { message: "Item updated successfully" });
                        }

                    }
                })
            }



        })

    }

}