import express from 'express';
import 'dotenv/config'
import './src/config/baseDatos.js'
import rutas from './src/routes/rutas.js'

const app = express();
app.use(express.static('public'));

app.use('/api', rutas);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor en el puerto http://localhost:${PORT}`))
} catch (e) {
    console.log(e);
}