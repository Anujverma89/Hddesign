// importing npm mysql
var mysql = require('mysql');


// creating a pool of connection
var pool = mysql.createPool({
    connectionLimit: 10,
    host: '127.0.0.1',
    user: 'root',
    password: 'EnxDigitalWeb123',
    database: 'Hddesign'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});


// exporting the connection 
module.exports = pool;
