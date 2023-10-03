const express = require('express');
const weatherController = require('./Controllers/weatherController');

const router = express.Router();

router.post('/weather/v1', weatherController.getWeather);

module.exports = router;