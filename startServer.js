var express = require('express');

var app = express();

var port = 5000;

/* SUPPORT CROSS DOMAIN !!!
app.all("/", function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
	return next();
});
*/

app.use(express.static('.'));

app.get('/', function (req, res) {
	res.send('hello world');
});

app.post('/views/', function (req, res) {
    console.log("post received: " + req.body);
});


app.listen(5000, function (err) {
	console.log('running server on port ' + port);


});