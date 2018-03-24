
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var axios = require("axios");
var cheerio = require("cheerio");
var db = require("./models");

var PORT = process.env.PORT || 3001;
var app = express();

//middleware
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.Promise = Promise;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1/papelzine" ;
mongoose.connect(MONGODB_URI,function(err){
  if(err){ 
    console.log("Mongoose Connection Error: "+err);
  }
});

var routes = require("./routes/");
app.use("/",routes);

app.listen(PORT,function(){ 
  console.log("App running on port " + PORT + "!"); 
});

