var express = require('express');
var appEnv = require('cfenv').getAppEnv();
var exphbs = require('express-handlebars');
var app = express();

app.engine('.hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static('public'));

app.get('/', function(req, res) {
	res.render('home', {name: 'wunderkinds'});
});

var server = app.listen(appEnv.port, appEnv.bind, function() {
	console.log('Application started at http://' + server.address().address + ':' + server.address().port);
});