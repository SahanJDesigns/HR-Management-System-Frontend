const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'project',
  password: 'jude17292',
});

module.exports = pool.promise();
