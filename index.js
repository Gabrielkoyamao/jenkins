var express = require('express');
var app = express();

app.get('/', function (req, res) {
 console.log('TESTE LOG, calling index')
 res.send("Heello from semaphore " + process.env.DB_HOST + "!!!");
});
app.listen(process.env.PORT || 3000);
module.exports = app;
