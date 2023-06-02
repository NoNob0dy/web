const reqRouters = require("./reqRouters");
const serverHandle = (req, res) => {
   res.setHeader("Content-Type", "application/json");
   //req.path = req.url.split("?")[0];
   const result = reqRouters(req, res);
   if (result) {
      res.write(result);
      res.end();
      return;
   }
   res.writeHead(404, { "Content-Type": "text/plain" });
   res.write("404 Not Found\n");
   res.end();
};
module.exports = serverHandle;