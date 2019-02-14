var mysql=require('mysql');
var connection=mysql.createPool({

 host:'localhost',
 user:'root',
 password:'214',
 database:'testDB'

});
module.exports=connection;
