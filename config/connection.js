// set up mySQL connection
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "cjones01",
    database: "burgers_db"
  });
};

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