// importing db connection

const e = require('express');
const dbconn = require('../dbconfig/db');

// creating model

const Reviewmodel = (review) => {
    this.Name = Review.Name;
    this.Location = Review.Location;
    this.Star = Review.Star;
    this.Image = Review.Image;
    this.Text = Review.Text;

}


// creating fetch all form the database;

Reviewmodel.getAllReviews = (result) => {
    dbconn.query('SELECT * FROM Review', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}

// post in review table;

Reviewmodel.postDataIntoTable = (reviewData, image, result) => {
    dbconn.query('INSERT INTO Review SET Name=?,Image=?,Location=?,Text=?,Star=?', [reviewData.Name, image, reviewData.Location, reviewData.Text, reviewData.Star], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        }
        console.log("data inserted into table")
        result(null, res);
    })
}


// get element by id;

Reviewmodel.getReviewWithId = (Review_id, result) => {
    dbconn.query('SELECT * FROM Review WHERE Review_id=?', Review_id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            console.log("fetchd item successfully");
            result(null, res);
        }
    })
}

// delete item with id 
Reviewmodel.deleteDataWithId = (Review_id, result) => {
    dbconn.query('DELETE  FROM Review WHERE Review_id=?', Review_id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}



// deletre all data
Reviewmodel.deleteAllData = (result) => {
    dbconn.query('TRUNCATE TABLE Review', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}

// update data
Reviewmodel.updateData = (id, reqData, newName, result) => {
    dbconn.query('UPDATE Review  SET Name=?,Image=?,Location=?,Star=?,Text=? Where Review_id=?', [reqData.Name, newName, reqData.Location, reqData.Star, reqData.Text, id], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = Reviewmodel;