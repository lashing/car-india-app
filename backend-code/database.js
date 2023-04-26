var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'db-tier-rdsdbinstance-7pncgonf2t6h.cbsacbp4qbu7.us-west-2.rds.amazonaws.com', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'Indiancar$12345',      // Replace with your database password
  database: 'cardb' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;
