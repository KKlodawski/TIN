const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req,res) {
    res.sendFile(__dirname + '/index.html');
}).listen(3000);

app.post('/result', function (req,res) {
   const parametr = req.body.parameter;
   res.write(`
   <html>
       ${parametr} <br>
       <a href="/">Back</a>
   </html>
   `);
   res.end();
});
