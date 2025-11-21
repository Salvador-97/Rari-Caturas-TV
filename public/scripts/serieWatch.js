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

        console.log(res.data)

        document.title = datosSerie.nombre;

        //Banner
        const bannerSerie = document.querySelector('.contenedor-banner');
        const rutaImagen = `url(${datosSerie.banner})`;
        const gradiente = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))'; 
        bannerSerie.style.backgroundImage = gradiente + ', ' + rutaImagen;


        //Logo de la serie
        const ctnLogo = document.querySelector('.logo-serie');
        const logo = document.createElement('img');
        logo.src = datosSerie.logo;

        ctnLogo.appendChild(logo);


        //Descripcion
        const ctnDescripcion = document.querySelector('.info-serie');
        const descripcion = document.createElement('p');
        descripcion.textContent = datosSerie.descripcion;
        descripcion.classList.add('contenedor-sinopsis');

        ctnDescripcion.appendChild(descripcion);

        //Temporadas Arreglar position

        const ctnTemporadas = document.querySelector('.nav-temporadas');
        for (let i = 0; i < datosSerie.noTemporadas; i++) {
            const link = document.createElement('a');
            link.href = `/watch/${datosSerie._id}/${datosSerie.temporadas + (i + 1)}`;
            link.textContent = `Temporada ${i + 1}`;
            link.classList.add('link-temporada');
            link.classList.add('link-deshabilitado');

            ctnTemporadas.appendChild(link);
        }

        //Informacion
        const listaDatos = ['resolucion', 'idioma', 'subtitulos', 'peso'];
        const ctnInformacion = document.querySelector('.serie-info-datos');
        informacionSerie.forEach(informacion => {
            listaDatos.forEach(dato => {
                const valorDato = document.createElement('h3');
                valorDato.textContent = informacion[dato];
                valorDato.classList.add('dato-valor')
                ctnInformacion.appendChild(valorDato);
            })
        })

        //Descarga
        const ctnDescargas = document.querySelector('.contenedor-descargas');
        const linkDescarga = document.createElement('a');
        const imgDescarga = document.createElement('img');

        imgDescarga.src = '/images/logos/drive_logo.png';
        imgDescarga.classList.add('imagen-descarga');
        linkDescarga.href = informacionSerie[0].drive;
        linkDescarga.target = "_blank"

        linkDescarga.appendChild(imgDescarga);
        ctnDescargas.appendChild(linkDescarga);

        //Capitulos
        const ctnCapitulos = document.querySelector('.flex-episodios');
        capitulosSerie.forEach((capitulo, index) => {
            const linkCapitulo = document.createElement('a');
            const divCapitulo = document.createElement('div');
            const imgCapitulo = document.createElement('img');
            const divNombreCapitulo = document.createElement('div');
            const nombreCapitulo = document.createElement('h4');

            linkCapitulo.href = `/watch/${datosSerie._id}/${datosSerie.temporada1}`;
            divCapitulo.classList.add('ctn-img');
            imgCapitulo.src = capitulo.caratula;
            divCapitulo.appendChild(imgCapitulo);
            linkCapitulo.appendChild(divCapitulo);

            divNombreCapitulo.classList.add('titulo-cap');
            nombreCapitulo.textContent = `${index + 1} - ${capitulo.nombre}`;
            divNombreCapitulo.appendChild(nombreCapitulo);
            linkCapitulo.appendChild(divNombreCapitulo);

            ctnCapitulos.appendChild(linkCapitulo);
        });
        attachClickTemporadas();
    } catch (err) {
        console.error(err);
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
                console.log('Nuevos Datos', datosSerie)
                updateContenido(datosSerie);
                history.pushState({ idSerie, temporada }, '', url);
            } catch (err) {
                console.error(err);
            }
        });
    });
}

// Función para actualizar el DOM con los datos
function updateContenido(datos) {
    const datosSerie = datos.serie;
    const informacionSerie = datos.informacion;
    const capitulosSerie = datos.temporadaBuscar;

    const ctnCapitulos = document.querySelector('.flex-episodios');
    ctnCapitulos.innerHTML = ""
    capitulosSerie.forEach((capitulo, index) => {
        const linkCapitulo = document.createElement('a');
        const divCapitulo = document.createElement('div');
        const imgCapitulo = document.createElement('img');
        const divNombreCapitulo = document.createElement('div');
        const nombreCapitulo = document.createElement('h4');

        linkCapitulo.href = `/watch/${datosSerie._id}/${datosSerie.temporada1}`;
        divCapitulo.classList.add('ctn-img');
        imgCapitulo.src = capitulo.caratula;
        divCapitulo.appendChild(imgCapitulo);
        linkCapitulo.appendChild(divCapitulo);

        divNombreCapitulo.classList.add('titulo-cap');
        nombreCapitulo.textContent = `${index + 1} - ${capitulo.nombre}`;
        divNombreCapitulo.appendChild(nombreCapitulo);
        linkCapitulo.appendChild(divNombreCapitulo);

        ctnCapitulos.appendChild(linkCapitulo);
    });
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
