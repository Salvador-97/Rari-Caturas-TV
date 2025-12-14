import informacionSerie from "../models/informacionSerie.js";
import Serie from "../models/Serie.js";
import SerieRecomendada from "../models/seriesBanner.js";
import Capitulos from "../models/Capitulos.js";
import { fileURLToPath } from "url";
import path from 'path';
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaError = path.join(__dirname, '../../public/pages/404.html')

class seriesController {
    constructor() {

    }

    async getAll(req, res) {
        try {
            //Importante ver como hacer la obtencion de datos
            const series = await Serie.find({}, "id poster temporada1");
            const recomendaciones = await SerieRecomendada.find({}, "id poster");
            res.json({
                series: series,
                recomendaciones
            });
        } catch (e) {
            res.status(404).send(e);
        }
    }

    async getHTMLSerie(req, res) {
        try {
            const { id } = req.params;

            if (!mongoose.isValidObjectId(id)) {
                return res.status(404).sendFile('public/pages/404.html', { root: process.cwd() });
            }

            const ruta = path.join(__dirname, '../../public/pages/watch.html');

            res.sendFile(ruta);
        } catch (e) {
            console.log("Ocurrio un error getHTML");
        }
    }

    async getOne(req, res) {
        try {
            const { id, temporada } = req.params;  // aquí está el id de la URL
            const datos = await Serie.findById(id);
            console.log(datos)

            if (!datos) {
                return res.status(404).sendFile(rutaError);
            }

            let temporadaSerie;

            if (!temporada) {
                temporadaSerie = datos.temporada1;
            } else {
                temporadaSerie = temporada;
            }

            const informacion = await informacionSerie.find(
                {
                    idSerie: String(datos._id),
                    nombre: temporadaSerie
                }
            );
            const temporadaBuscar = await Capitulos.find({ idTemporada: temporadaSerie }).sort({ idCapitulo: 1 });

            res.status(200).json({
                serie: datos,
                informacion,
                temporadaBuscar
            });
        } catch (e) {


            console.log("Ocurrio un error GetOne");
            console.log('Ruta HTML:', rutaError);
        }
    }
}


export default new seriesController();