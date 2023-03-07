var express = require('express');
var app = express();
var fs = require("fs");
var path =require('path');
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//添加用户
app.post('/add', function(req, res) {
    fs.readFile(path.resolve(__dirname,'./users.json'), 'utf8', function(err, data) {
        data = JSON.parse(data);
        data["userlist"].push({
            "id": 4,
            "username": "lucy",
            "password": "123456"
        });
        res.json(data);
    });
})

<<<<<<< HEAD
app.get('/list', function(req, res) {
    fs.readFile(path.resolve(__dirname,'./users.json'), 'utf8', function(err, data) {
        data = JSON.parse(data);
        res.json(data);
    });
})
=======
>>>>>>> bd545d0c982368f185922076aa4c310baccee200

app.listen(8080, function() {
    console.log("访问地址:http://localhost:8080")
})

module.exports = app;