#### Global Object

```js
var fileName = __filename
var dirName = __dirname
```

#### http module

```js
var app = require("http");
app.createServer((req, rsp) => {
    rsp.writeHead(200, {
        "Content-Type": "application/json; charset = utf-8"
    });
    rsp.write("<div>news</div>");
    //write() method must follows end() method!
    rsp.end(JSON.stringfy([{}]));
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
    /*async writing, data is written in object file*/
})
```

#### express module

```js

```

