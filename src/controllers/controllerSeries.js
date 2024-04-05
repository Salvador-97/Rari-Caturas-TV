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

// controller.watch = (req, res) => {
//     const { id } = req.params;
//     // let idTemporada;
//     //Conexion a la base de datos
//     req.getConnection((error, conexion) => {
//         conexion.query('SELECT * FROM seriesPrincipales WHERE idSerie = ?', [id], (error, serie) => {
//             if (error) {
//                 res.json(error);
//             }
//             var idTemporada = serie[0].temporada;
//             res.render('watch', {
//                 serie: serie[0]
//             });
//         });
//         console.log(`idTemporda = ${idTemporada}`);
//         // idTemporada = 'ATHF-1'
//         conexion.query('SELECT * FROM capitulos WHERE idTemporada = ?', [idTemporada] , (error, capitulos) => {
//             if (error) {
//                 res.json(error);
//             }
//             console.log(`ID Temporada = ${idTemporada}`);
//             console.log(typeof idTemporada);
//             console.log(capitulos);
//             // res.render('watch', {
//             //     // serie: serie[0]
//             // });
//         });
//     });
// }

controller.watch = (req, res) => {
    const { id } = req.params;
    const { temporada } = req.params;
    console.log(`ID: ${id}`);

    console.log(temporada);
    // let idTemporada;
    //Conexion a la base de datos
    req.getConnection((error, conexion) => {
        conexion.query('SELECT * FROM seriesPrincipales WHERE idSerie = ?', [id], (error, serie) => {
            if (error) {
                res.json(error);
            }else {
                conexion.query('SELECT * FROM capitulos WHERE idTemporada = ?', [temporada] , (error, capitulos) => {
                    if (error) {
                        res.json(error);
                    } else {
                        console.log(serie);
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

controller.episodes = (req, res) => {
    // res.render('episode-page');
    
}



module.exports = controller;