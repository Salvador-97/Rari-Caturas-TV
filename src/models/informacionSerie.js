import mongoose from "mongoose";

const informacionShema = new mongoose.Schema({
    idSerie: String,
    resolucion: String,
    idioma: String,
    subtitulos: String,
    peso: String,
    drive: String,
    mediafire: String
});

const informacionSerie = mongoose.model('informacionSeries', informacionShema, 'informacionSeries');
export default informacionSerie;