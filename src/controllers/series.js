import Serie from "../models/Serie.js";

class seriesController {
    constructor() {

    }

    async getAll(req, res) {
        try {
            //Importante ver como hacer la obtencion de datos
            const datos = await Serie.find({}, "id poster");
            res.json(datos);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }

    async getOne(req, res) {
        try {
            const { id } = req.params;  // aquí está el id de la URL

            const datos = await Serie.findById(id);

            if (!datos) {
                return res.status(404).json({ error: 'No encontrado' });
            }

            res.status(200).json(datos);
        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
}

export default new seriesController();