// importing db connection

const dbconn = require('../dbconfig/db');

const SocialModel = (socil) => {
    this.Facebook = Social.Facebook;
    this.Instagram = Social.Instagram;
    this.Twitter = Social.Twitter;
    this.Youtube = Social.Youtube;
}

// importing all the data from the data bases.
SocialModel.getallSocial = (result) => {
    dbconn.query('SELECT * FROM Social', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


// put into db
SocialModel.createSocial = (Socaildata, result) => {
    dbconn.query('INSERT INTO Social SET?', Socaildata, (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

// deletre all data
SocialModel.deleteAllData = (result) => {
    dbconn.query('TRUNCATE TABLE Social', (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })

}


// updatedata
SocialModel.updateData = (id, reqData, result) => {
    dbconn.query('UPDATE Social  SET? Where Social_id=?', [reqData, id], (err, res) => {
        if (err) {
            console.log(err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}


module.exports = SocialModel;