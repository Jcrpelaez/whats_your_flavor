var path = require("path");

module.exports = function(app) {
  app.get("/coffee", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/html/coffe.html"));
  });
};
