const videoModel = require('../models/video.model');

// get data
exports.getalldata = (req, res) => {

    videoModel.getAlldata((err, result) => {
        if (err) {
            console.log(err);
            res.status(200).send(err);
        } else {
            if (result.length == 0) {
                res.status(200).send(" No data Found");
                return;
            }
            res.status(200).send(result);
            console.log('data fetched successfully')
        }
    })

}


// post data
exports.postData = (req, res) => {
    const videodata = req.body;
    if (videodata.constructor == Object && Object(videodata).length == 0) {
        res.status(200).send({ "message": "Please send valid data" })
    } else {
        videoModel.postdata(videodata, (err, result) => {
            if (err) {
                console.log(err);
                res.status(200).send(err);
            } else {
                res.status(200).send("data inserted successfully")
            }
        })
    }


}


// get data by id
exports.getDataById = (req, res) => {
    Video_id = req.params.id;
    videoModel.getDataById(Video_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.length == 0) {
                console.log("no data found");
                res.status(200).send("No data found")

            } else {
                res.status(200).send(result);
            }
        }
    })
    console.log(Video_id);



}

// delete data by id

exports.deleteDataById = (req, res) => {


    Video_id = req.params.id;
    videoModel.deleteDataById(Video_id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            if (result.affectedRows == 0) {
                console.log("no data found");
                res.status(200).send(" The data you are trying delete could not be found")
                return;

            } else {
                res.status(200).send("data deleted successfully");
            }
        }
    })
    console.log(Video_id);

}

// delete all data 
exports.deleteaAllData = (req, res) => {
    videoModel.deleteAllData((err, result) => {
        if (err) {
            res.status(400).send("Failed to delete")
        } else {
            res.status(200).send("Data all deleted successfully")

        };

    })


}

// update video

exports.updateVideo = (req, res) => {
    const id = req.params.id;
    const reqVideo = req.body;
    videoModel.updateData(id, reqVideo, (err, result) => {
        if (err) {
            console.log(err);
            res.status(400).send("failed to update")
        } else {
            if (result.affectedRows == 0) {
                res.status(200).send("No rows matched")
            } else {
                res.status(200).send("Updated colum successfully");
            }

        }
    })

}