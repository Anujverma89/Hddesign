const express = require('express');
const app = require('../../app');
const router = express.Router();


const videoController = require('../controllers/video.controller');

// fetch all the data
router.get('/', videoController.getalldata);

// post into db
router.post('/', videoController.postData);


// get data with id
router.get('/:id', videoController.getDataById);


// deletedata by is
router.delete('/:id', videoController.deleteDataById);

// delete all data 
router.delete('/', videoController.deleteaAllData);

// update data 
router.put('/:id',videoController.updateVideo)



module.exports = router;