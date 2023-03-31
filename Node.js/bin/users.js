var express = require('express');
var users = express();
var fs = require("fs");
var path = require('path');
users.use(express.json())
users.use(express.urlencoded({ extended: false }))

users.post('/add', (req, res) => {
    fs.readFile(path.resolve(__dirname,'./users.json'), 'utf8', (err, data) => {
        data = JSON.parse(data);
        data["userlist"].push({
            "id": 4,
            "username": "lucy",
            "password": "123456"
        });
        res.json(data);
    });
})

users.get('/list', (req, res) => {
    fs.readFile(path.resolve(__dirname,'./users.json'), 'utf8', (err, data) => { 
        data = JSON.parse(data);
        res.json(data);
    });
})

module.exports = users;