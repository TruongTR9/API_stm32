var express = require('express');
var router = express.Router();
var testDB = require('./Models/testDB');

var bodyParser = require('body-parser')

const TokenGenerator = require('uuid-token-generator');
const tokgen = new TokenGenerator(128,TokenGenerator.BASE62); // If blank: 128-bit token encoded in base58 (Default)

router.get('/id:id?',function(req,res,next){
        testDB.getLetterById(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

router.post('/get_all', function(req,res){
    testDB.getAllLetter(function(err,rows){
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

//-----------GET TOKEN----------------------------------------------------------------------
router.post('/get_token', function(req,res){
    testDB.getLetterById(req.body.key, function(err,found){
        if(err){
            res.json(err);
        }
        else{ if(found != ""){
            var token = tokgen.generate();
            var key = req.body.key; //can't parse req.query
            res.json(token);
            console.log(found);
            }
            else{
                res.send("Key Not Found");
                console.log("Key Not Found");
            }
        }
    })
});

//-----------UPDATE STATUS-------------------------------------------------------------------
router.post('/update_status',function(req,res){

})

module.exports=router;
