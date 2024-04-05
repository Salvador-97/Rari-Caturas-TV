//Se usa un objeto para mejor manejo y uso de metodos
const controller = {};

controller.start = (req, res) => {
    //Conexion a la base de datos
    req.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM seriesRecomendadas', (error, filas) => {
            if (error) {
                res.JSON(error);
            }
            // console.log(typeof filas[0].poster);
            res.render('index', {
                informacion: filas
            });
        });
    });
};


controller.watch = (req, res) => {
    const { id } = req.params;
    const { temporada } = req.params;
    let newTemporada;
    console.log(req.body);
    if (req.body) {
        console.log('Parametro body encontrado...');
    } else {
        console.log('Parametro no encontrado...');

    }
    // console.log(`ID: ${id}`);
    // console.log(`Parametros: ${req.body.temporada}`);
    // console.log(temporada);
    // let idTemporada;
    //Conexion a la base de datos
    req.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM seriesPrincipales WHERE idSerie = ?', [id], (error, serie) => {
            if (error) {
                res.json(error);
            }else {
                if (temporada != undefined) {
                    // console.log('Parametro encontrado');
                    newTemporada = temporada;
                } else {
                    // console.log('No se encontro parametro');
                    newTemporada = serie[0].temporada;
                    // console.log(`Nuevo valor = ${newTemporada}`);
                }
                // temporada = newTemporada;
                // console.log(`Temporada = ${newTemporada}`);
                conexion.query('SELECT * FROM capitulos WHERE idTemporada = ?', [newTemporada] , (error, capitulos) => {
                    if (error) {
                        res.json(error);
                    } else {
                        // console.log(serie);
                        res.render('watch', {
                            serie: serie[0],
                            capitulos: capitulos
                        });
                    };
                }
            )} 
        });
    });
};

function consultaTemporada(Temporada) {
    
}

controller.episodes = (req, res) => {
    // console.log(`BODY: ${req.body}`);
    // const { nombre } = req.params;
    // const { id } = req.params;
    // console.log(nombre);
    // console.log(id);
    // res.render('episode-page');    
}



module.exports = controller;