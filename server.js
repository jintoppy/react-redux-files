var express = require('express');
var path = require('path');
var app = express();

var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath)); 

app.listen(3002, function(){
    console.log('started on 3002');
});