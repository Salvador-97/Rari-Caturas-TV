export function crearBanner(datosSerie) {
    const bannerSerie = document.querySelector('.contenedor-banner');
    const rutaImagen = `url(${datosSerie.banner})`;
    const gradiente = 'linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8))';
    bannerSerie.style.backgroundImage = gradiente + ', ' + rutaImagen;
}

export function crearLogo(datosSerie) {
    const ctnLogo = document.querySelector('.logo-serie');
    const logo = document.createElement('img');
    logo.src = datosSerie.logo;

    ctnLogo.appendChild(logo);
}

export function crearDescripcion(datosSerie) {
    const ctnDescripcion = document.querySelector('.info-serie');
    const descripcion = document.createElement('p');
    descripcion.textContent = datosSerie.descripcion;
    descripcion.classList.add('contenedor-sinopsis');

    ctnDescripcion.appendChild(descripcion);
}

export function crearTemporadas(datosSerie) {
    const ctnTemporadas = document.querySelector('.nav-temporadas');
    for (let i = 0; i < datosSerie.noTemporadas; i++) {
        const link = document.createElement('a');
        link.href = `/watch/${datosSerie._id}/${datosSerie.temporadas + (i + 1)}`;
        link.textContent = `Temporada ${i + 1}`;
        link.classList.add('link-temporada');
        link.classList.add('link-deshabilitado');

        ctnTemporadas.appendChild(link);
    }
}

export function crearInformacion(informacionSerie) {
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
}

export function crearDescarga(informacionSerie) {
    const ctnDescargas = document.querySelector('.contenedor-descargas');
    const linkDescarga = document.createElement('a');
    const imgDescarga = document.createElement('img');

    imgDescarga.src = '/images/logos/drive_logo.png';
    imgDescarga.classList.add('imagen-descarga');
    linkDescarga.href = informacionSerie[0].drive;
    linkDescarga.target = "_blank"

    linkDescarga.appendChild(imgDescarga);
    ctnDescargas.appendChild(linkDescarga);
}

export function crearCapitulos(datosSerie, capitulosSerie) {
    const ctnCapitulos = document.querySelector('.flex-episodios');
    capitulosSerie.forEach((capitulo, index) => {
        const linkCapitulo = document.createElement('a');
        const divCapitulo = document.createElement('div');
        const imgCapitulo = document.createElement('img');
        const divNombreCapitulo = document.createElement('div');
        const nombreCapitulo = document.createElement('h4');

        linkCapitulo.href = `/watch/${datosSerie._id}/${datosSerie.temporada1}/${capitulo._id}`;
        divCapitulo.classList.add('ctn-img');
        imgCapitulo.src = capitulo.caratula;
        imgCapitulo.loading = 'lazy';
        divCapitulo.appendChild(imgCapitulo);
        linkCapitulo.appendChild(divCapitulo);

        divNombreCapitulo.classList.add('titulo-cap');
        nombreCapitulo.textContent = `${index + 1} - ${capitulo.nombre}`;
        divNombreCapitulo.appendChild(nombreCapitulo);
        linkCapitulo.appendChild(divNombreCapitulo);

        ctnCapitulos.appendChild(linkCapitulo);
    });
}