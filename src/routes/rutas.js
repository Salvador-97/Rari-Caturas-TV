import express from 'express';
const router = express.Router();

// Controlador opcional
import seriesController from '../controllers/series.js';

router.get('/', seriesController.getAll);
router.get('/watch/:id', seriesController.getOne);
router.get('/watch/:id/:temporada', seriesController.getOne);
router.get('/watch/:id/:temporada/:capitulo', seriesController.getCapitulo)

export default router;