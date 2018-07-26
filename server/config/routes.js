const quotes = require("../controllers/quotes");
module.exports = function(app) {
    app.get("/", quotes.index);
    app.post("/quotes", quotes.create);
    app.get("/quotes", quotes.quotes);
}
  