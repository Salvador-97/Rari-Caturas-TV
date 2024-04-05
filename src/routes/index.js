const express = require('express');
const router = express.Router();

const seriesController = require('../controllers/controllerSeries');

router.get('/', seriesController.start);
router.get('/watch/:id', seriesController.watch);
router.get('/watch/:id/:temporada', seriesController.watch);
router.get('/watch/:id/:temporada/:nombre', seriesController.episodes);

module.exports = router;