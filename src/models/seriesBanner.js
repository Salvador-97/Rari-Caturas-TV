import mongoose from "mongoose";

const serieRecomendadaSchema = new mongoose.Schema({
    poster: String,
    temporada: String
})

const SerieRecomendada = mongoose.model('seriesRecomendadas', serieRecomendadaSchema, 'seriesRecomendadas');
export default SerieRecomendada;