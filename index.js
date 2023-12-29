var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Halo MJS!" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World!!!" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": "IT WORKS!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
