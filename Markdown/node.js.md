#### Global Object

```js
var fileName = __filename
var dirName = __dirname
```

#### http module

```js
var app = require("http");
app.createServer((req, res) => {
    //res.setHeader("Content-type", "text/html; charset=utf8");
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    });
    res.write("<div>news</div>");
    //write() method must follows end() method!
    res.end(JSON.stringfy([{}]));
}).listen(8080);
```

#### fs module

```js
var fs = require("fs");
fs.readFile('*.txt', (err, data) => {
    /*async reading*/
})
fs.readFileSync('*.txt');//sync reading
fs.writeFile('*.txt', data, (err) => {
    /*data is written in object file
    and will overwrite the old data*/
})
```

#### express module

```js
var express = require('express');
var app = express();
var fs = require("fs");
var filePath = __dirname + "/users.json";

app.get('/listUsers', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        res.end(data);
    });
})

app.get('/addUser', (req, res) => {
    var newUser = {
        "id": "4",
        "username": "madongmei",
        "password": "123"
    }
    fs.readFile(filePath, 'utf8', (err, data) => {
        data = JSON.parse(data);
        data["userlist"].push(newUser);
        data = JSON.stringify(data, "", "\t");
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (!err) {
                res.end(data);
            } else {
                res.end(err);
            }
        });
    });
})

app.get('/deleteUser', (req, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        data = JSON.parse(data);
        for (key in data["userlist"]) {
            if (data["userlist"][key]["id"] == "4") {
                data["userlist"].splice(key, 1);
                break;
            }
        }
        data = JSON.stringify(data, "", "\t");
        fs.writeFile(filePath, data, 'utf8', (err) => {
            if (!err) {
                res.end(data);
            } else {
                res.end(err);
            }
        });
    });
})

app.get('/:id', (req, res) => {
    var user = {};
    fs.readFile(filePath, 'utf8', (err, data) => {
        data = JSON.parse(data);
        for (key in data["userlist"]) {
            if (data["userlist"][key]["id"] == req.params.id) {
                user = data["userlist"][key];
                break;
            }
        }
        res.end(JSON.stringify(user, "", "\t"));
    });
})

app.listen(8080, function () {
    var host = "localhost"
    var port = "8080"
    console.log("listening:http://%s:%s", host, port)
})
```

