var express = require('express');
var router = express.Router();

const UsersCtrl = require('../controllers/users')


router.get('/',UsersCtrl.getAllUsers);

router.post('/', UsersCtrl.insertUser);


module.exports = router;
