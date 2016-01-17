var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var main = require('./controllers/main');
var app = express();

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

main.index(app);
main.login(app);

app.listen(app.get('port'), function() {
	console.log('Server up at port 3000');
});