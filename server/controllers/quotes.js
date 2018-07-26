const mongoose = require("mongoose"),
    Quote = mongoose.model("Quote");
module.exports = {

  // Routes Post & Get with validations and error msg's:
    index: function(req, res) {
      res.render("index");
  }, 

    create: function (req, res) {
      var quote = new Quote({ name: req.body.name, quote: req.body.quote });
      quote.save(function (err) {
        if (err) {
          res.render("index", { errors: quotes.errors });
        }
        else {
          res.redirect("/quotes");
        }
      });
    },
    quotes: function(req, res) {
      Quote.find({}, null, {sort: "-createdAt"}, function(err, quotes){
          res.render("quotes", {quotes: quotes});
      });
  }
};