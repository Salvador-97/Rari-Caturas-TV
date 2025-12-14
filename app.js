import express from 'express';
import path from 'path';
import 'dotenv/config'
import './src/config/baseDatos.js'
import rutas from './src/routes/rutas.js'
import rutasViews from './src/routes/rutasViews.js'

const app = express();
app.use(express.static('public'));

app.use('/', rutasViews);
app.use('/api', rutas);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Servidor en el puerto http://localhost:${PORT}`))
} catch (e) {
    console.log(e);
}

app.use((req, res) => {
    return res.status(404).sendFile('public/pages/404.html', { root: process.cwd() });
})