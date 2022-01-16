var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "trainingDB",port: "3306"
});

con.connect((function(error){
    if(error) throw error; 
    console.log('Connected');  
    let sql = 'CREATE TABLE customers (name VARCHAR(255),address VARCHAR(255))';
    con.query(sql, function(err, result){
        if(err) throw err;
        console.log("Table created")
    }) 
    
}))