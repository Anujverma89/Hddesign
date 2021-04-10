// importing necessary package
const express = require('express');
const router = express.Router();



// requiring image controller
const imageController = require('../controllers/image.controller');


// fetching all the image data;
router.get('/', imageController.getAllImageData);


// post into image table;
router.post('/', imageController.postImageData);

// fetching data with id;

router.get('/:Id', imageController.getDataWithId);


// delete Image with id;
router.delete('/:Id', imageController.deleteImageById);


// delete all data 
router.delete('/', imageController.deleteaAllData);

// update data 
router.put('/:id', imageController.updateData)

module.exports = router;