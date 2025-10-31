import express from 'express';
const router = express.Router();

// Controlador opcional
import { home, series } from '../controllers/controladorPrincipal.js';

router.get('/', home);
router.get('/watch/:id', series)

export default router;