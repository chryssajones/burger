// set up mySQL connection
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "burgers_db"
});

// Connect to database
connection.connect(function(err) {
	if (err) {
    	console.error("error connecting: " + err.stack);
    return;
  }	
	console.log("Connected to the SQL database as id: " + connection.threadId);
});

// export the connection
module.exports = connection;