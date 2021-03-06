
var cors = require("cors");
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  port = process.env.PORT || 9000;


const mysql = require('mysql');
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'auction'
});
 
// connect to database
mc.connect();

app.listen(port);
app.use(cors());
console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route