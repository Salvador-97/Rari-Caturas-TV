import express from 'express';
import router from './src/routes/index.js';
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', router);

// Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
});