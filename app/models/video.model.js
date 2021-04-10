// improting db
const dbconn = require('../dbconfig/db');

const VideoModel = (videos) => {
    this.Title = Video.Title;
    this.Videourl = Video.Videourl;
}

// getting all the data 
VideoModel.getAlldata = (result) => {
    dbconn.query('SELECT * FROM Video', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}

// post into data

VideoModel.postdata = (videodata, result) => {
    dbconn.query('INSERT INTO Video SET?', videodata, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}


// get data from data by is
VideoModel.getDataById = (Video_id, result) => {
    dbconn.query('SELECT * FROM  Video WHERE  Video_id=?', Video_id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, titleerr);
        } else {
            result(null, res);
        }
    })

}


// delete data from database
VideoModel.deleteDataById = (Video_id, result) => {
    dbconn.query('DELETE  FROM  Video WHERE Video_id=?', Video_id, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}

// delete all data
VideoModel.deleteAllData = (result) => {
    dbconn.query('TRUNCATE TABLE Video', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}

//update data 

VideoModel.updateData = (id, reqVideo, result) => {
    dbconn.query('UPDATE Video  SET? Where Video_id=?', [reqVideo, id], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


module.exports = VideoModel;