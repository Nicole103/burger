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
router.post("/api/burger", function(req, res){
    burger.create(["burger_name"],[req.body.burger_name], function(result){
        res.json({id: result.insertID});
    });
});

// .put "update" router
router.put("/api/burger/", function(req, res){
    var condition = "id =" +req.params.id;
    console.log("condition", condition);

    burger.update(
        {
            devoured: req.body.devoured
        }, condition, function(result){
            if(result.changedRows ==0){
                return res.status(404).end();
            }else{
            res.status(200).end();
        }
        });
});

//.delete "DELETE" router
router.delete("/api/burgers/:id", function(req, res){
    var condition = "id =" +req.params.id;

    burger.delete(condition, function(req, res){
        if(result.affectedRows == 0){
            return res.status(404).end();
        } else{
            res.status(202).end();
        }
    });
});

module.exports = router;
//Export router