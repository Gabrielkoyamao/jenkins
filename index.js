var express = require('express');
require('dotenv').config();
var app = express();

app.get('/', function (req, res) {
    console.log('process env == ', process.env)
 res.send("HELLO MUDEI!!!" + process.env.DB_HOST);
});
app.listen(process.env.PORT || 3000);
module.exports = app;
