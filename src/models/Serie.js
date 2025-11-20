import mongoose from "mongoose"

//Solo tener un modelo por coleccion, de ahi puedo seleccionar cualquier elemento

const schemaSeries = new mongoose.Schema({
    nombre: { type: String, required: true },
    poster: String,
    banner: String,
    logo: String,
    descripcion: String,
    noTemporadas: Number,
    temporada1: String,
    temporadas: String
})

const Serie = mongoose.model('series', schemaSeries);
export default Serie;