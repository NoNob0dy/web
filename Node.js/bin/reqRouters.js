const reqRouters = (req, res) => {
    if (req.url === "/") {
      return "index";
    }
    if (req.url === "/list") {
      return "list";
    }
    if (req.url === "/add") {
      return "add";
    }
  };
  module.exports = reqRouters;