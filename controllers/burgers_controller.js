var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

//routers 
// .get "all" router
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: Data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});


// .post "create" router


// .put "update" router

//Export router