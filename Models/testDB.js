
var db = require('../DBconnection');

var testDB={
        getAllLetter:function(callback){
                return db.query("Select * from testDB",callback);
        },
        getLetterById:function(id,callback){
                return db.query("select * from testDB where letter=?",[id],callback);
        },
        // addLetter:function(testDB,callback){
        //         return db.query("Insert into testDB(letter) values(?)",[testDB.letter],callback);
        // },
        // deleteLetter:function(id,callback){
        //         return db.query("delete from testDB where id=?",[id],callback);
        // },
        // updateLetter:function(id,letter,callback){
        //         return db.query("update testDB set id=?,letter=? where id=?",[testDb.id,testDB.letter,id],callback);
        // }
};
 module.exports=testDB;
