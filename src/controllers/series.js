import informacionSerie from "../models/informacionSerie.js";
import Serie from "../models/Serie.js";
import SerieRecomendada from "../models/seriesBanner.js";
import Capitulos from "../models/Capitulos.js"
import path from 'path';

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
            res.status(500).send(e);
        }
    }

    async getHTMLSerie(req, res) {
        try {
            const ruta = path.join(process.cwd(), 'public/pages/watch.html');

            res.sendFile(ruta);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async getHTMLCapitulo(req, res){
        try {
            const ruta = path.join(process.cwd(), 'public/pages/capitulo.html');
            res.sendFile(ruta);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getOne(req, res) {
        try {
            const { id, temporada } = req.params;  // aquí está el id de la URL
            const datos = await Serie.findById(id);


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
            
            if (!datos) {
                return res.status(404).json({ error: 'No encontrado' });
            }

            res.status(200).json({
                serie: datos,
                informacion,
                temporadaBuscar
            });
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async getCapitulo(req, res){
        try {
            const { id, temporada, capitulo } = req.params;

            console.log(req.params)
        } catch (error) {
            console.log(error);
        }
    }
}


export default new seriesController();