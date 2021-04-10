// importing all the important tags

const express = require('express');
const router = express.Router();


// imporing controller from controller

const reviewController = require('../controllers/review.controller');

// fetching all the data from the database;
router.get('/', reviewController.getAllReviews);

//put review into data;

router.post('/',reviewController.postDataIntoTable);

//get review with id 
router.get('/:id', reviewController.getReviewWithId);

// delete review with id
router.delete('/:id', reviewController.deleteDataWithId);

// delete all data 
router.delete('/', reviewController.deleteaAllData);

// update data 
router.put('/:id', reviewController.updateData)


module.exports = router;