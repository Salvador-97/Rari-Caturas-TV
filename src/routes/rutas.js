import express from 'express';
const router = express.Router();

// Controlador opcional
import seriesController from '../controllers/series.js';
import capitulosController from '../controllers/capitulos.js'

router.get('/', seriesController.getAll);
router.get('/watch/:id/:temporada/:idCapitulo', capitulosController.getCapitulo);
router.get('/watch/:id/:temporada', seriesController.getOne);
router.get('/watch/:id', seriesController.getOne);

export default router;