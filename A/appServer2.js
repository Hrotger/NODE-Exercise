var http_port = 8080;
var http = require('http');
var server = http.createServer( onNovaConexio );
server.listen(http_port);
console.log("servidor escoltant port " + http_port);

function onNovaConexio(req, res)  {
    
        // Tractem els paràmetres de req
        var url = require('url');
        req.requrl = url.parse(req.url, true);
        req.a = (req.requrl.query.a && (!isNaN(req.requrl.query.a)) ? new Number(req.requrl.query.a) :
            NaN);
        req.b = (req.requrl.query.b && (!isNaN(req.requrl.query.b)) ? new Number(req.requrl.query.b) :
            NaN);
        // Triem segons la ruta
        if (req.requrl.pathname === '/') {
            // A l'arrel mostrem el menú
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(
                ["<ul><li><a href='/suma'>suma</a></li>",
                    "<li><a href='/resta'>resta</a></li>",
                    "<li><a href='/multi'>multi</a></li>",
                    "<li><a href='/div'>div</a></li></ul>"].join('\n'));

        } else if (req.requrl.pathname === '/suma') {
            require('./suma').get(req, res);
        } else if (req.requrl.pathname === '/resta') {
            require('./resta').get(req, res);
        } else if (req.requrl.pathname === '/multi') {
            require('./multi').get(req, res);
        } else if (req.requrl.pathname === '/div') {
            require('./div').get(req, res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("URL incorrecte " + req.url);
        }
}