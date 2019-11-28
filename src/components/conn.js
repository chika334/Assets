const mysql = require('mysql')

const con = mysql.createConnection({
    hostname: "localhost",
    username: "root",
    password: "johnCENA19",
    dbname: "reactdb"
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected!');
})