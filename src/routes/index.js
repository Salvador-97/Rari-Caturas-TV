const express = require('express');
const router = express.Router();

const seriesController = require('../controllers/controllerSeries');

router.get('/', seriesController.start);

module.exports = router;