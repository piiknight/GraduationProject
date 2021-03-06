var express = require("express");
var app = express();
var path  = require('path');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
var db = require('./database');
var dbfunc = require('./db-function');
var http  = require('http')
var bodyParser = require('body-parser');
var UserRoute = require('../app/routes/user.route');

var LoaiTiecRoute = require('../app/routes/loai-tiec.route');
var CongViecRoute = require('../app/routes/congviec.route');
var TiecNLRoute = require('../app/routes/tiec-nl.route');
var MenuRoute = require('../app/routes/menu.route');
var MenuMonRoute = require('../app/routes/menu-mon.route');
var NguyenlieuRoute = require('../app/routes/nguyenlieu.route');
var MonNLieuRoute = require('../app/routes/mon-nlieu.route');
var VatDungRoute = require('../app/routes/vatdung.route');
var MonVDRoute = require('../app/routes/mon-vd.route');
var DichvuRoute = require('../app/routes/dichvu.route');
var TiecDVRoute = require('../app/routes/tiec-dv.route');
var TiecRoute = require('../app/routes/tiec.route');
var NNVdungRoute = require('../app/routes/nn-vd.route');
var MonRoute = require('../app/routes/mon.route');

var AuthenticRoute = require('../app/routes/authentic.route');
var errorCode = require('../common/error-code')
var errorMessage = require('../common/error-methods')
var checkToken = require('./secureRoute');

// var schedule = require('node-schedule');
 
// var j = schedule.scheduleJob('*/1 * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

dbfunc.connectionCheck.then((data) =>{
    //console.log(data);
 }).catch((err) => {
     console.log(err);
 });
 
 app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

var router = express.Router();
app.use('/api',router);
AuthenticRoute.init(router);

var secureApi = express.Router();

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware

app.use('/secureApi',secureApi);
// secureApi.use(checkToken);


app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


// index route
app.get('/', (req,res) => {
    res.send('hello world');
});

var ApiConfig = {
  app: app
}

// Init Route under secureApi
UserRoute.init(secureApi);
LoaiTiecRoute.init(secureApi);
CongViecRoute.init(secureApi);
TiecNLRoute.init(secureApi);
MenuRoute.init(secureApi);
MenuMonRoute.init(secureApi);
NguyenlieuRoute.init(secureApi);
MonNLieuRoute.init(secureApi);
VatDungRoute.init(secureApi);
MonVDRoute.init(secureApi);
DichvuRoute.init(secureApi);
TiecDVRoute.init(secureApi);
MonRoute.init(secureApi);
TiecRoute.init(secureApi);
NNVdungRoute.init(secureApi);

module.exports = ApiConfig;
