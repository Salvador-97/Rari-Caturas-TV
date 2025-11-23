import express from 'express';
const router = express.Router();

// Controlador opcional
import seriesController from '../controllers/series.js';

router.get('/watch/:id', seriesController.getHTMLSerie);
router.get('/watch/:id/:temporada', seriesController.getHTMLSerie);
router.get('/watch/:id/:temporada/:capitulo', seriesController.getHTMLCapitulo)

export default router;