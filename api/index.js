var express = require('express');
var app = express();
var path = require('path');
var request = require('request');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(path.join(__dirname, 'static')));


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname + '/static/index.html'))
});

var uri = 'https://api.fortnitetracker.com/v1/profile/';
app.post('/', function(req,res){
    console.log(req.body);
    request.get(uri + req.body.DropDownValue + '/' + req.body.epicNickName,{
        headers : {
            'TRN-Api-Key' : '3dd263e6-311c-4b96-bf12-fc6aebb3487e'
        }}, function(error,response,body){
            console.body(body);
            res.json(body);
        });
});

var port = process.env.PORT || 3000;
app.listen(port);