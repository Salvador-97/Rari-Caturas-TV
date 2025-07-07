controller.watch = (req, res) => {
    const { id } = req.params;
    const { temporada } = req.params;
    let newTemporada;
    req.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM seriesPrincipales WHERE idSerie = ?', [id], (error, serie) => {
            if (error || (serie.length == 0)) {
                // res.json(error);
                console.log('HUBO UN ERROR');
                // let pathAux = path404.dir;
                // res.status(404).sendFile(path.join(path404.dir , '/public/pages/404.html'));
                res.status(404);
                res.render('error', {
                    error: 'Serie no encontrada',
                    id: null,
                    temporada: null
                });
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
                            if (error || info.length == 0) {
                                res.status(404);
                                res.render('error', {
                                    error: 'Serie no encontrada',
                                    id: null,
                                    temporada: null
                                });
                            } else {
                                res.render('watch', {
                                    serie: serie[0],
                                    capitulos: capitulos,
                                    info: info[0]
                                });
                            }
                        });
                        // console.log(serie);
                    };
                })
            } else {
                res.status(404);
                res.render('error', {
                    error: 'Serie no encontrada',
                    id: null,
                    temporada: null
                });
            }
        });
    });
};