
var mysql = require("mysql");

require('dotenv').config();

// if(process.env.JAWSDB_u) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// }else {

    // process.env.SQL_PASS

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: " ",
    database: "burger_db"
});
// }
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
