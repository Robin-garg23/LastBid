'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    database : 'auction'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;