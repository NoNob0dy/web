const reqRouters = (req, res) => {
    if (req.path === "/") {
      return "index";
    }
    if (req.path === "/list") {
      return "list";
    }
    if (req.path === "/add") {
      return "add";
    }
  };
  module.exports = reqRouters;