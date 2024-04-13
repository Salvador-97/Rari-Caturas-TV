//Se usa un objeto para mejor manejo y uso de metodos
const controller = {};
const path = require('path');
const path404 = path.parse(__dirname);

controller.start = (req, res) => {
    //Conexion a la base de datos
    req.getConnection((error, conexion) => {
        if (error) {
            res.JSON(error);
            console.log('ERROR');
        } else {
            conexion.query('SELECT * FROM seriesRecomendadas', (error, filas) => {
                if (error) {
                    res.JSON(error);
                    console.log('ERROR');
                } else{
                    conexion.query('SELECT * FROM seriesPrincipales', (error, series) => {
                        if (error) {
                            res.JSON(error);
                        } else {
                            res.render('index', {
                                informacion : filas,
                                serie : series
                            });
                        }
                    });
                }
            });
        }
        
    });
};

controller.watch = (req, res) => {
    const { id } = req.params;
    const { temporada } = req.params;
    let newTemporada;
    req.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM seriesPrincipales WHERE idSerie = ?', [id], (error, serie) => {
            if (error) {
                res.json(error);
            } else if (serie[0] != null) {
                if (temporada != undefined) {
                    // console.log('Parametro encontrado');
                    newTemporada = temporada;
                } else {
                    // console.log('No se encontro parametro');
                    newTemporada = serie[0].temporada;
                    // console.log(`Nuevo valor = ${newTemporada}`);
                }
                conexion.query('SELECT * FROM capitulos WHERE idTemporada = ?', [newTemporada], (error, capitulos) => {
                    if (error) {
                        res.json(error);
                    } else {
                        conexion.query('SELECT * FROM informacionSeries WHERE id = ?', [newTemporada], (error, info) => {
                            if (error) {
                                res.json(error);
                            } else {
                                res.render('watch', {
                                    serie: serie[0],
                                    capitulos: capitulos,
                                    info : info[0]
                                });
                            }
                        });
                        // console.log(serie);
                    };
                })
            } else {
                res.status(404).sendFile(path.join(path404.dir , '/public/pages/404.html'));
            }
        });
    });
};


controller.episodes = (req, res) => {
    // console.log('YA ENTRO');
    const { temporada } = req.params;
    const { nombre } = req.params;
    // console.log(temporada);
    // console.log(nombre);
    req.getConnection((error, conexion) => {
        if (error) {
            res.json(error);
        } else {
            conexion.query('SELECT nombre, link FROM capitulos WHERE idTemporada = ? AND nombre = ?', [temporada, nombre], (error, capitulo) => {
                if (error) {
                    res.json(error);
                } else {
                    // console.log(capitulo);
                    if (capitulo[0].link != 'doodstream') {
                        console.log(capitulo[0].link);
                        res.render('episode-page', {
                            capitulo: capitulo[0]
                        })
                    }else {
                        res.status(404).sendFile(path.join(path404.dir , '/public/pages/404.html'));
                    }
                    // console.log(capitulo[0].link);
                }
            });
        }
    });
}

module.exports = controller;