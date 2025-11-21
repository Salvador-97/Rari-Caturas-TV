import mongoose from "mongoose";

const capitulosShema = new mongoose.Schema({
    idCapitulo: String,
    idTemporada: String,
    nombre: String,
    link: String,
    caratula: String
})

const Capitulos = mongoose.model('capitulos', capitulosShema);
export default Capitulos;