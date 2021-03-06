var orm = require("../config/orm.js");

//call the ORM functions using burger specific input for the ORM.
var burger = {
    //select all burgers from db
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    //create / add burgers to db
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },
    //updating the burgers if devoured in db
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },
    //delete burgers from db
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};
//export the db for the controller
module.exports = burger;