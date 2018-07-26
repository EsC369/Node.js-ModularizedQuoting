const express = require("express");
const app = express();
const body_parser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(body_parser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/quoting_dojo"); // if db doesnt exist one wil be created
app.use(express.static(__dirname + "/public"));

// Schema with validations:
var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    quote: {type: String, required: true, minlength: 2},
}, {timestamps: true});
mongoose.model("Quote", QuoteSchema);

// Model:
var Quote = mongoose.model("Quote");

// Modularize:
// require("./server/config/mongoose")();
require("./server/config/routes")(app);

// Listening:
app.listen(8000);