const fragmentos = window.location.pathname.split('/');
const idSerie = fragmentos[2];
const temporada = fragmentos[3];
const capitulo = fragmentos[4];

axios.get(`/api/watch/${idSerie}/${temporada}/${capitulo}`)
    .then(res => {
        const datosCapitulo = res.data.capitulo;
        const capituloAnterior = res.data.anterior._id;
        const capituloSiguiente = res.data.siguiente._id;
        console.log(datosCapitulo)

        document.title = datosCapitulo.nombre;

        const frameCapitulo = document.querySelector('.ctn-video');
        const nombreCapitulo = document.querySelector('.nombre-capitulo');

        //Si no tiene el http no sabe que es un recurso externo
        let link = datosCapitulo.link;
        if (!link.startsWith("http")) {
            link = "https://" + link;
        }

        frameCapitulo.src = link;
        nombreCapitulo.textContent = datosCapitulo.nombre;

        const botonAnterior = document.getElementById('previous');
        botonAnterior.href = `/watch/${idSerie}/${datosCapitulo.idTemporada}/${capituloAnterior}`;

        const botonHome = document.getElementById('home');
        botonHome.href = `/watch/${idSerie}/${datosCapitulo.idTemporada}`;

        const botonSiguiente = document.getElementById('next');
        botonSiguiente.href = `/watch/${idSerie}/${datosCapitulo.idTemporada}/${capituloSiguiente}`;
    })
    .catch(err => console.log(err))