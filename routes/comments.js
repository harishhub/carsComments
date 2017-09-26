var express = require('express');
var router = express.Router();

const CommentsCtrl = require('../controllers/comments')

router.get('/',CommentsCtrl.getAllComments);
router.get('/:userId',CommentsCtrl.getUserComments);
// router.get('/:carId',CommentsCtrl.getCarComments);

router.post('/', CommentsCtrl.insertComment);

module.exports = router;
