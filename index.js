var express = require('express');
var app = express();

app.get('/', function (req, res) {
 console.log('TESTE LOG, calling index')
 res.send("HELLO MUDEI!!!");
});
app.listen(process.env.PORT || 3000);
module.exports = app;
