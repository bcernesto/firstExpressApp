var express = require('express');
var router = express.Router();

var nano = require('nano')('http://localhost:5984');
var users = nano.db.use('users');


/* GET users listing. */
router.get('/', function(req, res, next) {
    users.list(function (err, body) {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            var usersDB = body.rows;
            console.log(usersDB);
            res.send(usersDB);
        }
    });
});

module.exports = router;




