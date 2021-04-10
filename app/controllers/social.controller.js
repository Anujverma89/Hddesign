// importing socialmodel;

const SocialModel = require('../models/social.model');

// creating controller to fetch data 
exports.getAllSocail = (req, res) => {
    SocialModel.getallSocial((err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        } else {
            if (result.length == 0) {
                res.status(200).send("no data found");
            } else {
                res.status(200).send(result);
            }

        }
    })
}

// putting into databsae;

exports.createSocial = (req, res) => {
    Socaildata = req.body;
    if (Socaildata.constructor == Object && Object(Socaildata).length == 0) {
        res.send("please send valid data")
    } else {
        SocialModel.createSocial(Socaildata, (err, result) => {
            if (err) {
                console.log(err);
                res.status(400).send("some error occured")
            } else {
                res.status(200).send("data inserted successfully")

            }
        })
    }

}

// delete all data 
exports.deleteaAllData = (req, res) => {
    SocialModel.deleteAllData((err, result) => {
        if (err) {
            res.status(400).send("Failed to delete")
        } else {
            res.status(200).send("Data all deleted successfully")

        }

    })


}

exports.updateData = (req, res) => {
    // const id = req.params.id;
    const reqData = req.body;
    console.log(reqData);
    // console.log(id)
    // SocialModel.updateData(id, reqData, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //         res.status(400).send("failed to update")
    //     } else {
    //         if (result.affectedRows == 0) {
    //             res.status(200).send("No rows matched")
    //         } else {
    //             res.status(200).send("Updated colum successfully")
    //         }

    //     }
    // })

}