var express = require('express');
var router = express.Router();

const CommentsCtrl = require('../controllers/comments')


router.get('/',CommentsCtrl.getAllAlerts);

router.post('/', CommentsCtrl.insertAlert);

router.delete('/:reference_id', CommentsCtrl.deleteAlert);

module.exports = router;
