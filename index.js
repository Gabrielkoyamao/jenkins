var express = require('express');
var app = express();

console.log(process.env)

app.get('/', function (req, res) {
 res.send("Heello from semaphore " + process.env.DB_HOST + "!!!");
});
app.listen(process.env.PORT || 3000);
module.exports = app;
