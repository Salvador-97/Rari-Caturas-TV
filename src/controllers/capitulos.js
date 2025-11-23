import { link } from "fs";
import Capitulos from "../models/Capitulos.js"
import path from 'path';

class capitulosController {
    constructor() { };

    async getHTMLCapitulo(req, res) {
        try {
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
            const capitulo = await Capitulos.findById(idCapitulo, "link nombre");

            //Hacer consulta del capitulo anterior y siguiente para meter un boton

            if (!capitulo) {
                return res.status(404).json({ error: 'No encontrado' });
            }

            res.status(200).json({
                capitulo: capitulo
            })

        } catch (error) {
            console.log(error);
        }
    }
}

export default new capitulosController();