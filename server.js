
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

var app = express();
//Use express static fpr the public folder
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import routes 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function(){
  console.log("App now listening at localhost:" +PORT);
});

