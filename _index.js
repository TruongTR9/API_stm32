var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

var server = app.listen(3000, function() {
  console.log('Server listening on port ' + server.address().port);
});

const router = express.Router();
router.get('/', function(req, res) {
    res.json({ message: 'API is Online!' });
});

module.exports = app;
app.use('/apitest', router);
