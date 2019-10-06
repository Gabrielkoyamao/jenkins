var express = require('express');
require('dotenv').config()
var app = express();


app.get('/', function (req, res) {
 res.send("Heello from semaphore " + process.env.DB_HOST + "!!!");
});
app.listen(process.env.PORT || 3000);
module.exports = app;
