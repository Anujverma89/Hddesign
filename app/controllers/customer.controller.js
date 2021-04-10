// creating controller for custoemr leads
const customermodel = require('../models/customerlead.model')

// getting the data from table 
exports.getCustomerLeads = (req, res) => {
    customermodel.getcutomerlist((err, customerlist) => {
        if (err) {
            console.log("unbale to fetch data error in controlller");
            res.status(500).send(err);

        } else {
            res.status(200).send(customerlist);
        }

    })
}

// fetching data using id
exports.getCustomerLeadsById = (req, res) => {
    Id = req.params.Id;
    customermodel.getCustomerLeadsById(Id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(result);
            console.log(result);
        }
    })
}

// puttig into databasez
exports.postCustomerleads = (req, res) => {
    const customerReqData = req.body;
    console.log(customerReqData);
    if (req.body.constructor === Object && Object(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'please fill all field ' });
    } else {
        customermodel.createCustomerLead(customerReqData, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(result);
                res.status(200).send("Data inseretd successfully ")
            }
        })
    }


}

// delete customer by id
exports.deleteCustomerbyId = (req, res) => {
    Id = req.params.Id;
    customermodel.deleteCustomerById(Id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            console.log(result)
            if (result.affectedRows == 0) {
                console.log("no data found");
                res.status(200).send("no data found USER does not exist")

            }

            else { res.status(200).send("deleted item Successfully") };
        }
    })
}


// delete all data 
exports.deleteaAllData = (req, res) => {
    customermodel.deleteAllData((err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send("Data all deleted successfully")

        }

    })


}

exports.updateData = (req, res) => {
    const id = req.params.id;
    const reqData = req.body;
    customermodel.updateData(id, reqData, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send(err)
        } else {
            if (result.affectedRows == 0) {
                res.status(200).send("No rows matched")
            } else {
                res.status(200).send("Updated colum successfully");
            }

        }
    })

}