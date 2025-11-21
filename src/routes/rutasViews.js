import express from 'express';
const router = express.Router();

// Controlador opcional
import seriesController from '../controllers/series.js';

router.get('/watch/:id', seriesController.getHTML);
router.get('/watch/:id/:temporada', seriesController.getHTML);

export default router;