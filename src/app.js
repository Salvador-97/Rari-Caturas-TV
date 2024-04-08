const express = require('express');
const path = require('path');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();

//Ruta del index
const indexRoute = require('./routes/index'); //Hacer que el archivo regrese un objeto

//Seleccion del puerto, renderizado de páginas
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Conexion a la base de datos
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'series'
}, 'single'));

//ROUTES
app.use('/', indexRoute);

//Archivos estaticos
app.use(express.static(path.join(__dirname, '/public')));

//Empezando el servidor
app.listen(app.set('port'), () => {
    console.log(`Escuchando en el puerto 3000`);
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/public/pages/404.html'));
});


//Recibir y decodificar datos que vengan del formulario
app.use(express.urlencoded({extended: false}));
