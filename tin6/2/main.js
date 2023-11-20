const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req,res) {
    res.sendFile(__dirname + '/index.html');
}).listen(3000);

app.post('/result', function (req,res) {
    const parametr = req.body.parameter;
    fs.writeFile('formtext.txt', parametr, (err) => {
        if (err) throw err;
    });
    res.redirect("/");
});
