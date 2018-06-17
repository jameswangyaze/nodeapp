var connect = require('connect');
		serveStatic = require('serve-static');
var port = 3000;

var app = connect();

app.use(serveStatic(__dirname));
app.listen(port);
console.log('Connected via port ' + port);