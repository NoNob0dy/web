const http = require("http");
const serverHandle = require("./serverHandle");
const server = http.createServer(serverHandle);
server.listen(80, () => {
  console.log("listening port http://localhost......");
})

const users = require("./users");
users.listen(8080, () => {
  console.log("listening port http://localhost:8080......");
})
