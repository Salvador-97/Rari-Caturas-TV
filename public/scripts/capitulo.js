const fragmentos = window.location.pathname.split('/');
const idSerie = fragmentos[2];
const temporada = fragmentos[3];
const capitulo = fragmentos[4];

axios.get(`/api/watch/${idSerie}/${temporada}/${capitulo}`)
    .then(res => {
        console.log("Datos: ", res.data.capitulo);
        const datosCapitulo = res.data.capitulo;

        const frameCapitulo = document.querySelector('.ctn-video');
        const nombreCapitulo = document.querySelector('.nombre-capitulo');

        frameCapitulo.src = datosCapitulo.link;
        nombreCapitulo.textContent = datosCapitulo.nombre;
    })
    .catch(err => console.log(err))