// importing db connection from dbconfig;
const dbconn = require('../dbconfig/db');
const jwt = require('jsonwebtoken');


// defining the model for the admin;

const Amdinlist = (Admin) => {

    this.Name = Admin.Name;
    this.Phoneno = Admin.Phoneno;
    this.Email = Admin.Email;
    this.Password = Admin.Password;

}

// fetching information of all the admins;

Amdinlist.fetchAllAdmins = (result) => {
    dbconn.query('SELECT * FROM Admin', (err, res) => {
        if (err) {
            result(null, err);
        } else {
            result(null, res)
        }
    })

}

// posting data into adminlist
Amdinlist.createAdminlist = (admindata, result) => {
    dbconn.query('SELECT * FROM Admin where Email=?', admindata.Email, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            if (res.length !== 0) {
                result(null, false);
                return;

            }
            else {

                let payLoad = { subject: admindata.Email }
                // verify secret key for sigining the token  
                let token = jwt.sign(payLoad, 'verify')

                dbconn.query('INSERT INTO Admin SET Name=?,Phoneno=?,Email=?,Password=sha1(?),Token=?', [admindata.Name, admindata.Phoneno, admindata.Email, admindata.Password, token], (err, res) => {
                    if (err) {
                        console.log("unable to create admin list", err)
                        result(null, res);
                    } else {
                        console.log("adminlist successfullyy created")
                        result(null, res);
                    }
                })
            }
        }
    })
}


// delete admin by id
Amdinlist.deleteAdminById = (Admin_id, result) => {
    dbconn.query('DELETE FROM Admin where Admin_id=?', Admin_id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, res)
        } else {
            if (res.affectedRows == 0) {
                console.log("no related user found")
                result(null, res)

            } else {
                console.log("Admin deleted successfully");
                result(null, res);
            }
        }
    })

}


// get elemtnet by id
Amdinlist.getAdminListId = (Admin_id, result) => {
    dbconn.query('SELECT * FROM Admin where Admin_id=?', Admin_id, (err, res) => {
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
                console.log("fetched data successfully");
            }

        }
    })

}
// get admin list by token
Amdinlist.getAdminListByEmail = (Email, result) => {
    dbconn.query('SELECT * FROM Admin where Email=?', Email, (err, res) => {
        if (err) {
            console.log("Error while fetching data", err);
            result(null, err);
        } else {
            if (res.length == 0) {
                console.log("no data found");
                result(null, res);
                return;
            }
            else {
                result(null, res);
                console.log("User is authentic");
            }

        }
    })

}

// deletre all data
Amdinlist.deleteAllData = (result) => {
    dbconn.query('TRUNCATE TABLE Admin', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}


// update data
Amdinlist.updateData = (id, reqData, result) => {
    dbconn.query('UPDATE Admin  SET? Where Admin_id=?', [reqData, id], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

// getadminadatawith name 
// login query 
Amdinlist.userLogin = (loginData, result) => {
    dbconn.query('SELECT * FROM Admin where Email=?', loginData.Email, (err, res) => {
        if (err) {
            result(null, err);
        } else {
            if (res.length == 0) {
                result(null, "noData")
                return;
            }
            else {
                dbconn.query('SELECT * FROM Admin where Password=sha1(?)', loginData.Password, (err, res) => {
                    if (err) {
                        console.log(err);
                        result(null, err);
                    } else {
                        if (res.length == 0) {
                            result(null, "wrong")
                        } else {
                            result(null, res);


                        }
                    }
                })
            }

        }
    })
}




// exporting model adminlist
module.exports = Amdinlist;