const express = require("express");
const dbconn = require("../dbconfig/db");

const galleryModel = () => {

    this.Topic = Gallery.Topic;
    this.NewName1 = Gallery.Image_1;
    this.NewName2 = Gallery.Image_2;
    this.NewName3 = Gallery.Image_3;
    this.NewName4 = Gallery.Image_4;
    this.NewName5 = Gallery.Image_5;
    this.NewName6 = Gallery.Image_6;
    this.NewName7 = Gallery.Image_7;
    this.NewName8 = Gallery.Image_8;
    this.NewName9 = Gallery.Image_9;
    this.NewName10 = Gallery.Image_10;
}

// get image data
galleryModel.getAllData = (result) => {
    dbconn.query('SELECT * FROM Gallery', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err)
        } else {
            result(null, res);
        }
    })

}

// posting imagedata

galleryModel.postImageData = (ImageData, NewName1, NewName2, NewName3, NewName4, NewName5, NewName6, NewName7, NewName8, NewName9, NewName10, result) => {
    dbconn.query('INSERT INTO Gallery SET Topic=?, Image_1=?, Image_2=?,Image_3=?,Image_4=?,Image_5=?,Image_6=?,Image_7=?,Image_8=?,Image_9=?,Image_10=?', [ImageData, NewName1, NewName2, NewName3, NewName4, NewName5, NewName6, NewName7, NewName8, NewName9, NewName10], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err)
        } else {
            result(null, res);
        }
    })

}

// delete admin data
galleryModel.deleteImageById = (topicid, result) => {
    const id = topicid;
    dbconn.query(`delete  from Gallery where G_Id=${id}`, (err, res) => {

        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}


// DELETE ALL TABLE





module.exports = galleryModel;