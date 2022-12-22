const express = require('express');
const cityController = require('../../controllers/city-controller')
const airportController = require('../../controllers/airport-controller');
const flightcntroller = require('../../controllers/flight-controller')


const router = express.Router();

router.post('/city', cityController.create);
router.delete('/city/:id', cityController.destroy);
router.get('/city/:id', cityController.get);
router.patch('/city/:id', cityController.update);
router.get('/city', cityController.getAll);
router.post('/city/addAll',cityController.addAll);

router.post('/airport',airportController.create);
router.delete('/airport/:id', airportController.destroy);
router.get('/airport/:id', airportController.get);
router.patch('/airport/:id', airportController.update);
router.get('/airport', airportController.getAll);

router.post('/flight', flightcntroller.create)

module.exports = router;