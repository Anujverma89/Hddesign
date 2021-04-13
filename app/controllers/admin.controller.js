// importing admin model form models;

const jwt = require('jsonwebtoken');

const Adminlist = require('../models/admin.model');

// exports.fetchAllAdmins = (req, res) => {

//     Adminlist.fetchAllAdmins((err, adminlist) => {
//         if (err) {
//             res.status(500).send(err);
//         }
//         else {
//             if (adminlist.length == 0) {
//                 // res.status(200).render('pages/admin', { message: "No data found" })
//                 res.status(200).send("No data found");
//                 return;
//             } else {
//                 // res.status(200).render('pages/admin', { message: adminlist });
//                 res.status(200).send(adminlist);
//             }
//         }

//     })

// }


// Create admin

// exports.createAdminlist = (req, res) => {
//     const admindata = req.body;
//     const email = req.body.Email;

//     console.log(admindata)
//     if (req.body.constructor == Object && Object(req.body).length == 0) {
//         res.status(500).send("Invalid data")
//     } else {
//         Adminlist.createAdminlist(admindata, (err, result) => {
//             if (err) {
//                 res.status(500).send(err);
//             } else if (result == false) {
//                 res.status(400).render("pages/admin", { message: "Email is taken try new email", data: "" });
//                 return;

//             }
//             else {

//                 // console.log(result);
//                 console.log(email)
//                 const payload = { subject: email };
//                 let jwtToken = jwt.sign(payload, 'verify');
//                 const cookie = res.cookie('jwtToken', jwtToken, { maxAge: 1000000, httpOnly: true })
//                 console.log(cookie);
//                 res.status(200).render('pages/admin', { message: 'Admin list created Successfully', data: "" });
//             }
//         })
//     }

// }

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
                res.status(200).render("pages/admin", { message: "No data data found" });
            }
            else {
                console.log("Admin deleted successfully");
                res.status(200).render("pages/admin", { message: "Admin deleted successfully" })
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
                res.status(200).render("pages/admin", { message: "No data found" })
            }
            else {
                res.status(200).render("pages/admin", { message: result })
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
            res.status(200).render("pages/admin", { message: "Deleted all data " })

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
                res.status(200).render("pages/admin", { message: "No rows matched" })
            } else {
                res.status(200).render("pages/admin", { message: "admin updated successfully" })
            }

        }
    })

}


