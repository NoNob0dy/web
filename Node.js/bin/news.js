// TODO: 待补充代码
var http = require("http");

http.get('/news', (res) => {
    res.setEncoding('utf8');
})

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/html;charset=utf8");
    res.end(JSON.stringify(
        [
            {
                "channelId": "5572a108b3cdc86cf39001cd",
                "name": "国内焦点"
            },
            {
                "channelId": "5572a108b3cdc86cf39001ce",
                "name": "国际焦点"
            }
        ]
    ))
});

server.listen(8080, () => {
    console.log("listening in: http://localhost:8080");
})

