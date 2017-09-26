var express = require('express');
var router = express.Router();

const CarsCtrl = require('../controllers/cars')


router.get('/',CarsCtrl.getAllCars);

router.post('/', CarsCtrl.insertCar);


module.exports = router;
