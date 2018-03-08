var http = require('http');
var fs = require('fs');

fs.appendFile('/Users/zhonghengli/Documents/NYU Grad/Ai Gaming Research/GitHub/CICERO-An-AI-Game-Design-Assisted-Tool/frames/mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
}).listen(8080);