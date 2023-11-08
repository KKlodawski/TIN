var http = require('http');
var url = require('url');

http.createServer(function (req, res) {

    var content = url.parse(req.url,true);
    let statusCode = 400;
    let text = "";

    if(!isNaN(content.query.x) && !isNaN(content.query.y))
    {
        let x = parseFloat(content.query.x);
        let y = parseFloat(content.query.y);

        switch (content.pathname) {
            case "/dodaj":
                statusCode = 200;
                text = `${x} + ${y} = ${x + y}`;
                break;
            case "/odejmij":
                statusCode = 200;
                text = `${x} - ${y} = ${x - y}`;
                break;
            case "/pomnoz":
                statusCode = 200;
                text = `${x} * ${y} = ${x * y}`;
                break;
            case "/podziel":
                if (y === 0) {
                    statusCode = 400;
                    text = "cannot divide by 0";
                    break;
                } else {
                    statusCode = 200;
                    text = `${x} / ${y} = ${x / y}`;
                    break;
                }
            default:
                statusCode = 400;
                text = "Unknown operation!";
                break;
        }
    } else {
        statusCode = 400;
        text = "You need to give x and y numbers!";
    }
    res.writeHead(statusCode, {'Content-Type': 'text/html'});
    res.write(text);
    res.end();

}).listen(3000);

//http://localhost:3000/podziel?y=2
//http://localhost:3000/dodaj?x=4&y=2
//http://localhost:3000/odejmij?x=4&y=6
//http://localhost:3000/operacja?x=4&y=6
//http://localhost:3000/pomnoz?x=2.2&y=0.2
//http://localhost:3000/podziel?x=6&y=2
//http://localhost:3000/podziel?x=0&y=2
//http://localhost:3000/podziel?x=6&y=0