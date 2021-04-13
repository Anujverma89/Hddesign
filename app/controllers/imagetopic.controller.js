const GalleryModel = require("../models/imagetopic.model");








exports.getAllImageData = (req, res) => {

    GalleryModel.getAllData((err, result) => {
        if (err) {
            res.status(500).send("internal server Error", err);
        } else {
            if (result.length == 0) {
                res.status(200).render('pages/topicimg', { message: "No data found" });
            } else {
                res.status(200).render('pages/topicimg', { message: "", data: result })
            }

        }
    })




}


exports.postImageData = (req, res) => {
    const ImageData = req.body.Topic;
    const file1 = req.files.Image1;
    const file2 = req.files.Image2;
    const file3 = req.files.Image3;
    const file4 = req.files.Image4;
    const file5 = req.files.Image5;
    const file6 = req.files.Image6;
    const file7 = req.files.Image7;
    const file8 = req.files.Image8;
    const file9 = req.files.Image9;
    const file10 = req.files.Image10;
    const Name1 = file1.name;
    const Name2 = file2.name;
    const Name3 = file3.name;
    const Name4 = file4.name;
    const Name5 = file5.name;
    const Name6 = file6.name;
    const Name7 = file7.name;
    const Name8 = file8.name;
    const Name9 = file9.name;
    const Name10 = file10.name;

    NewName1 = Date.now() + Name1;
    NewName2 = Date.now() + Name2;
    NewName3 = Date.now() + Name3;
    NewName4 = Date.now() + Name4;
    NewName5 = Date.now() + Name5;
    NewName6 = Date.now() + Name6;
    NewName7 = Date.now() + Name7;
    NewName8 = Date.now() + Name8;
    NewName9 = Date.now() + Name9;
    NewName10 = Date.now() + Name10;
    console.log(ImageData, NewName1, NewName2, NewName3, NewName4, NewName5, NewName6, NewName7, NewName8, NewName9, NewName10);

    const path1 = process.cwd() + `/public/images/topicimage/${NewName1}`;
    const path2 = process.cwd() + `/public/images/topicimage/${NewName2}`;
    const path3 = process.cwd() + `/public/images/topicimage/${NewName3}`;
    const path4 = process.cwd() + `/public/images/topicimage/${NewName4}`;
    const path5 = process.cwd() + `/public/images/topicimage/${NewName5}`;
    const path6 = process.cwd() + `/public/images/topicimage/${NewName6}`;
    const path7 = process.cwd() + `/public/images/topicimage/${NewName7}`;
    const path8 = process.cwd() + `/public/images/topicimage/${NewName8}`;
    const path9 = process.cwd() + `/public/images/topicimage/${NewName9}`;
    const path10 = process.cwd() + `/public/images/topicimage/${NewName10}`;



    if (file1.mimetype == "image/jpeg" || file2.mimetype == "image/jpeg") {

        file1.mv(path1, (err) => {
            if (err) {
                res.status(500).send(err);
            } else {
                file2.mv(path2, (err) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        file3.mv(path3, (err) => {
                            if (err) {
                                res.status(500).send(err);
                            } else {
                                file4.mv(path4, (err) => {
                                    if (err) {
                                        res.status(500).send(err);
                                    } else {
                                        file5.mv(path5, (err) => {
                                            if (err) {
                                                res.status(500).send(err);
                                            } else {
                                                file6.mv(path6, (err) => {
                                                    if (err) {
                                                        res.status(500).send(err);
                                                    } else {
                                                        file7.mv(path7, (err) => {
                                                            if (err) {
                                                                res.status(500).send(err);
                                                            } else {
                                                                file8.mv(path8, (err) => {
                                                                    if (err) {
                                                                        res.status(500).send(err);
                                                                    } else {
                                                                        file9.mv(path9, (err) => {
                                                                            if (err) {
                                                                                res.status(500).send(err);
                                                                            } else {
                                                                                file10.mv(path10, (err) => {
                                                                                    if (err) {
                                                                                        res.status(500).send(err);
                                                                                    } else {
                                                                                        // declearing real model
                                                                                        GalleryModel.postImageData(ImageData, NewName1, NewName2, NewName3, NewName4, NewName5, NewName6, NewName7, NewName8, NewName9, NewName10, (err, result) => {
                                                                                            if (err) {
                                                                                                res.send(500).send(err);
                                                                                            } else {
                                                                                                // res.status(200).render('pages/topicimg', { message: "Topic Image Created Successfully", data: "" });

                                                                                                // fetching data after uploads
                                                                                                GalleryModel.getAllData((err, result) => {
                                                                                                    if (err) {
                                                                                                        res.status(500).send("internal server Error", err);
                                                                                                    } else {
                                                                                                        if (result.length == 0) {
                                                                                                            res.status(200).render('pages/topicimg', { message: "No data found" });
                                                                                                        } else {
                                                                                                            res.status(200).render('pages/topicimg', { message: "Image Uploaded successfully", data: result })
                                                                                                        }

                                                                                                    }
                                                                                                })
                                                                                            }
                                                                                        })

                                                                                    }
                                                                                })
                                                                            }
                                                                        })
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })

                    }
                })
            }

        })


    }



}




