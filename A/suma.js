var math = require('math');
exports.get = function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(
        [(!isNaN(req.a) ? ("<p class='result'> {a} + {b} = {suma} </p>"
            .replace("{a}", Math.floor(req.a))
            .replace("{b}", Math.floor(req.b))
            .replace("{suma}", Math.floor(req.a) + Math.floor(req.b))) :""),

            "<p>Suma!</p>",
            "<a href='/'>Torna</a>",
            "<form name='suma' action='/suma' method='get'>",
            "A: <input type='text' name='a' />",
            "B: <input type='text' name='b' />",
            "<input type='submit' value='Resol' />",
            "</form>"
        ].join('\n')
    );
}