import {
    crearBanner, crearDescripcion, crearLogo,
    crearTemporadas, crearInformacion,
    crearDescarga,
    crearCapitulos
} from "./tools/partsSerie.js";

// Función que se ejecuta al cargar la página
async function init() {
    const fragmentos = window.location.pathname.split('/');
    const idSerie = fragmentos[2];
    const temporada = fragmentos[3] || null;

    const urlAxios = temporada
        ? `/api/watch/${idSerie}/${temporada}`
        : `/api/watch/${idSerie}`;

    try {
        const res = await axios.get(urlAxios);
        const datosSerie = res.data.serie;
        const informacionSerie = res.data.informacion;
        const capitulosSerie = res.data.temporadaBuscar;

        document.title = datosSerie.nombre;

        crearBanner(datosSerie);
        crearLogo(datosSerie);
        crearDescripcion(datosSerie);
        crearTemporadas(datosSerie);
        crearInformacion(informacionSerie);
        crearDescarga(informacionSerie);
        crearCapitulos(datosSerie, capitulosSerie);

        attachClickTemporadas();
    } catch (err) {
        console.error(err);
        console.log("Serie no encontrada")
        document.title = '404';

    }
}

// Función para manejar clicks en links de temporada
function attachClickTemporadas() {
    document.querySelectorAll('.link-temporada').forEach(link => {
        link.addEventListener('click', async e => {
            e.preventDefault();
            const url = link.getAttribute('href');
            const fragmentos = url.split('/');
            const idSerie = fragmentos[2];
            const temporada = fragmentos[3];

            const urlAxios = `/api/watch/${idSerie}/${temporada}`;
            try {
                const res = await axios.get(urlAxios);
                const datosSerie = res.data;
                updateContenido(datosSerie);
                history.pushState({ idSerie, temporada }, '', url);
            } catch (err) {
                console.error(err);
            }
        });
    });
}

// Función para actualizar el DOM con los datos
function updateContenido(nuevosDatos) {
    const nuevosDatosSerie = nuevosDatos.serie;
    // const informacionSerie = nuevosDatos.informacion;
    const capitulosSerie = nuevosDatos.temporadaBuscar;

    const ctnCapitulos = document.querySelector('.flex-episodios');
    ctnCapitulos.innerHTML = ""
    crearCapitulos(nuevosDatosSerie, capitulosSerie)
}

// Manejo del botón atrás/adelante
window.addEventListener('popstate', async (event) => {
    if (event.state) {
        const { idSerie, temporada } = event.state;
        const urlAxios = temporada
            ? `/api/watch/${idSerie}/${temporada}`
            : `/api/watch/${idSerie}`;
        const res = await axios.get(urlAxios);
        const datos = res.data;
        updateContenido(datos);
    }
});

// Ejecutamos al cargar la página
init();
