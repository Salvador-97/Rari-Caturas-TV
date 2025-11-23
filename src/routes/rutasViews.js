import express from 'express';
const router = express.Router();

// Controlador opcional
import seriesController from '../controllers/series.js';
import capitulosController from '../controllers/capitulos.js'

router.get('/watch/:id/:temporada/:idCapitulo', capitulosController.getHTMLCapitulo);
router.get('/watch/:id/:temporada', seriesController.getHTMLSerie);
router.get('/watch/:id', seriesController.getHTMLSerie);

export default router;