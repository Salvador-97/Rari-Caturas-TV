const fragmentos = window.location.pathname.split('/');
const idSerie = fragmentos[2];
const temporada = fragmentos[3];
const capitulo = fragmentos[4];

axios.get(`/api/watch/${idSerie}/${temporada}/${capitulo}`)
    .then(res => {
        console.log("Datos: ", res.data.capitulo);
        const datosCapitulo = res.data.capitulo;

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
    })
    .catch(err => console.log(err))