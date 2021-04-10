// importing admin model form models;

const Adminlist = require('../models/admin.model');

exports.fetchAllAdmins = (req, res) => {

    Adminlist.fetchAllAdmins((err, adminlist) => {
        if (err) {
            res.status(500).send(err);
        }
        else {
            if (adminlist.length == 0) {
                res.status(200).send("no data found")
                return;
            } else {
                res.status(200).send(adminlist);
            }
        }

    })

}


// Create admin

exports.createAdminlist = (req, res) => {
    const admindata = req.body;
    console.log(admindata)
    if (req.body.constructor == Object && Object(req.body).length == 0) {
        res.send("Invalid data")
    } else {
        Adminlist.createAdminlist(admindata, (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else if (result == false) {
                res.status(403).send("email already exists try new email");
                return;

            }
            else {
                res.status(200).send("Admin created successfully");
                // res.send(result);

            }
        })
    }

}

// delete admin by id;

exports.deleteAdminById = (req, res) => {
    Admin_id = req.params.Id;
    Adminlist.deleteAdminById(Admin_id, (err, result) => {

        if (err) {
            res.status(500).send(err);
        }
        else {
            if (result.affectedRows == 0) {
                console.log("no user of that id found")
                res.status(200).send("no user of that id found")
            }
            else {
                console.log("Admin deleted successfully");
                res.status(200).send("admin deleted successfully")
            }
        }

    })



}

// get element by id
exports.getAdminListId = (req, res) => {
    const Admin_id = req.params.Id;
    Adminlist.getAdminListId(Admin_id, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            if (result.length === 0) {
                res.status(200).send("no data foound");
            }
            else {
                res.status(200).send(result);
            }

        }

    })
}


// delete all data 
exports.deleteaAllData = (req, res) => {
    Adminlist.deleteAllData((err, result) => {
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
    Adminlist.updateData(id, reqData, (err, result) => {
        if (err) {

            res.status(500).send(err);
        } else {
            if (result.affectedRows == 0) {
                res.status(200).send("No rows matched")
            } else {
                res.status(200).send("Updated colum successfully");
            }

        }
    })

}