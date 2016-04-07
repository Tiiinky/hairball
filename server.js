/**
 * Created by Daniel Friedel on 30.03.2016.
 */
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('public'));

var port = '8080';
app.set('port', port);

var server = http.createServer(app);
server.listen(port);


/* serves main page */
app.get("/", function(req, res) {
    console.log("received call on /");
    res.sendfile('index.html')
});

app.get("/imagelist", function(req, res) {
    console.log("received a get for imagelist");
    fs.readdir('./public/images/', function(err, items) {
        console.log(items);

        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(items));
    });
});