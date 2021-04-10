// importing database connsection

const dbconn = require('../dbconfig/db');

const Imagemodel = (image) => {

    this.Service = Image.Service;
    this.Imageurl = Image.Imageurl;

}


//fetching all the data from image table;

Imagemodel.getAllImageData = (result) => {
    dbconn.query('SELECT * FROM Image', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            if (res.length == 0) {
                console.log("no data found")
                result(null, res)
            } else {
                console.log("data fetched successfully")
                result(null, res)
            }
        }
    })
}

// post data into image table;

Imagemodel.postImageData = (imageData, newName, result) => {
    dbconn.query('INSERT INTO Image SET Imageurl=?, Service=?', [newName, imageData.Service], (err, res) => {
        if (err) {
            console.log("unable to create image list", err)
            result(null, res);
        } else {
            console.log("imagelist successfullyy created")
            result(null, res);
        }
    })

}


// get image with id 
Imagemodel.getImageById = (Image_id, result) => {
    dbconn.query('SELECT * FROM Image where Image_ID=?', Image_id, (err, res) => {
        if (err) {
            console.log("Error while fetching data", err);
            result(null, err);
        } else {
            if (res.length == 0) {
                console.log("no data found");
                result(null, res);
            }
            else {
                result(null, res);
                console.log("fetched data successfully", Image_id);
            }

        }
    })

}

// delete image by id
Imagemodel.deleteImageById = (Image_id, result) => {
    dbconn.query('DELETE FROM Image WHERE Image_ID=?', Image_id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err)
        } else {
            result(null, res);
        }
    })
}


// deletre all data
Imagemodel.deleteAllData = (result) => {
    dbconn.query('TRUNCATE TABLE Image', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}

// update data
Imagemodel.updateData = (id, reqData, newName, result) => {
    dbconn.query('UPDATE Image  SET Imageurl=?,Service=? Where Image_ID=?', [newName, reqData.Service, id], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = Imagemodel;