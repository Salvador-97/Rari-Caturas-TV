import Capitulos from "../models/Capitulos.js"
import path from 'path';
import mongoose from "mongoose";

class capitulosController {
    constructor() { };

    async getHTMLCapitulo(req, res) {
        try {

            const idCapitulo = req.params.idCapitulo;

            if (!mongoose.isValidObjectId(idCapitulo)) {
                return res.status(404).sendFile('public/pages/404.html', { root: process.cwd() });
            }

            const ruta = path.join(process.cwd(), 'public/pages/capitulo.html');
            res.sendFile(ruta);
        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }


    async getCapitulo(req, res) {
        try {
            const idCapitulo = req.params.idCapitulo;
            const capitulo = await Capitulos.findById(idCapitulo, "link nombre idCapitulo idTemporada");
            //Pasar a numero en Mongo
            //Agregar condicion para evitar capitulos que no existen
            const idCapituloAnterior = String(parseInt(capitulo.idCapitulo) - 1);
            const idCapituloSiguiente = String(parseInt(capitulo.idCapitulo) + 1);


            const capituloAnterior = await Capitulos.findOne({
                idTemporada: capitulo.idTemporada,
                idCapitulo: idCapituloAnterior
            }, "_id");

            const capituloSiguiente = await Capitulos.findOne({
                idTemporada: capitulo.idTemporada,
                idCapitulo: idCapituloSiguiente
            }, "_id");

            //Hacer consulta del capitulo anterior y siguiente para meter un boton

            if (!capitulo) {
                return res.status(404).json({ error: 'No encontrado' });
            }

            res.status(200).json({
                capitulo: capitulo,
                anterior: capituloAnterior,
                siguiente: capituloSiguiente
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export default new capitulosController();