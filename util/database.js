const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'node-complete',
    password: 'puja@23$Q#56'

});
module.exports = pool.promise();
