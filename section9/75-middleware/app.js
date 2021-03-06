var express = require('express');
var app = express();

// set port
var port = process.env.PORT || 8080;

// middleware to sever static files
app.use('/assets', express.static(__dirname + '/public'));

// our own middleware
app.use('/', function(req, res, next) {
   console.log('Request url: ' + req.url);
   next();
});

// this will respond to a http request and map to a url aka a route
app.get('/', function(req, res) {
    res.send('<html><h1>Hello world!</h1></html>');
});
app.get('/api', function(req, res) {
    res.json({ firstname: 'John', lastname: 'Doe' });
});
// dynamic route
app.get('/person/:id', function(req, res) {
    res.send('<html><h1>Person: ' + req.params.id + '</h1></html>');
});

// listen for connections
app.listen(port);