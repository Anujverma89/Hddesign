// importing dependencies like router and express;
const express = require("express");
const router = express.Router();

// importing admincontorller from controllers;

const admincontorller = require('../controllers/admin.controller')

// fetching all the admins
// router.get('/', admincontorller.fetchAllAdmins);

// post adminlist;
// router.post('/', admincontorller.createAdminlist);


// delete admin by id 
router.delete('/:Id', admincontorller.deleteAdminById);


// get admin by id;
router.get('/:Id', admincontorller.getAdminListId);

// delete all data 
router.delete('/', admincontorller.deleteaAllData);


// update data 
router.put('/:id', admincontorller.updateData)

module.exports = router;

