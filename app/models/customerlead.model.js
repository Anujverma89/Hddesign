// importing db connection module
const dbconn = require('../dbconfig/db')

// creating a varibale customerormleads
var customerLeads = (customer) => {
    this.name = Formleads.name;
    this.mobileIo = Formleads.Mobileno;
    this.city = Formleads.City;
    this.emailId = Formleads.Email_id;
    this.services = Formleads.Services;
    this.text = Formleads.Text;

}

// creating a function to fecth the customer leads;
customerLeads.getcutomerlist = (result) => {
    dbconn.query('SELECT * FROM Formleads', (err, res) => {
        if (err) {
            console.log('error in fetching data', err);
            result(null, err);
        } else {
            console.log('Fetchign data is successful');
            result(null, res);
        }
    })

}

// fetching customer leads by id
customerLeads.getCustomerLeadsById = (ID, result) => {
    dbconn.query('SELECT * FROM Formleads where Id=?', ID, (err, res) => {
        if (err) {
            console.log("Error while fetching data", err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}



// puttng the data into the database
customerLeads.createCustomerLead = (customerReqData, result) => {
    dbconn.query('INSERT INTO Formleads SET?', customerReqData, (err, res) => {
        if (err) {
            console.log("error occurdwhile inserting data");
            result(null, err);
        } else {
            console.log("employee created successfully");
            result(null, res);
        }
    })
}


// delete element by id 
customerLeads.deleteCustomerById = (Id, result) => {
    dbconn.query('DELETE FROM Formleads where Id=?', Id, (err, res) => {
        if (err) {
            console.log("no data exists", err);
            result(null, err)

        } else {
            if (res.affectedRows == 0) {
                console.log("no  user exists");
                result(null, res)

            }
            else {
                console.log("item deleted", Id);
                result(null, res);
            }

        }
    })
}


// deletre all data
customerLeads.deleteAllData = (result) => {
    dbconn.query('TRUNCATE TABLE Formleads', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}


// update data
customerLeads.updateData = (id, reqData, result) => {
    dbconn.query('UPDATE Formleads  SET? Where Id=?', [reqData, id], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


module.exports = customerLeads;