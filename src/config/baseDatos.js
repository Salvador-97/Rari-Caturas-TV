import mongoose from "mongoose";
import dotenv from 'dotenv';

// Configuración del entorno
dotenv.config();

const PORT = process.env.PORT || 3000;

// Inicialización de base de datos y servidor
mongoose.connect(process.env.MONGO_DB_URI)
    .then(() => {
        console.log('Base de datos conectada...');
        console.log('Usando base de datos:', mongoose.connection.name);
    })
    .catch(error => console.log(error));

export default mongoose;