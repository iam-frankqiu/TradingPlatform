/**
 * Created by Frank Qiu on 2016/10/13.
 */
"use strict";


var express = require('express'),
    //session = require('express-session'),
    mongoose = require('mongoose'),
    router = require('./lib/router'),
    bodyParser = require('body-parser'),
    multer = require('multer'),
    User = require('./lib/models/user'),
    app = express();


//app.set( 'view engine', 'html' );
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // for parsing application/json

app.use(express.static(__dirname + '/'));
mongoose.connect('mongodb://localhost:27017/tfdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on("open", function () {
    console.log("------数据库连接成功！------");
});
router(app);

console.log('you have  logged in  successfully!');
app.listen(4000);


