const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

// get data from the list  
router.get('/', customerController.getCustomerLeads)

// to select on the basis of the query
router.get('/:Id', customerController.getCustomerLeadsById);


// put data into the table
router.post('/', customerController.postCustomerleads)

// delete element by id
router.delete('/:Id', customerController.deleteCustomerbyId);

// delete all data 
router.delete('/', customerController.deleteaAllData);


// update data 
router.put('/:id', customerController.updateData)


module.exports = router;
