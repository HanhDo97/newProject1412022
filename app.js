var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: "trainingDB",port: "3306"
});

con.connect((function(error){
    if(error) throw error; 
    {
     console.log('Connected');   
    }
}))