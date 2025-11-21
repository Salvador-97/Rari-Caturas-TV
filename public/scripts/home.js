//Ver lo de el uso de axios

axios.get('/api')
    .then(res => {
        const series = res.data.series;
        const recomendaciones = res.data.recomendaciones;
        const slideBanner = document.getElementById('slide-serie')

        recomendaciones.forEach((serie, index) => {
            const contenedorSlides = document.createElement('div');
            const banner = document.createElement('img');

            contenedorSlides.classList.add('carousel-item');

            if (index === 0) {
                contenedorSlides.classList.add('active');
            }

            banner.src = serie.poster;
            banner.classList.add('d-block');
            banner.classList.add('w-100');
            banner.classList.add('imagen-carrusel')

            contenedorSlides.appendChild(banner);
            slideBanner.appendChild(contenedorSlides);
        })

        const contenedorSeries = document.getElementById('contenedor-posters');
        series.forEach(serie => {
            const poster = document.createElement('a');
            poster.href = `/watch/${serie._id}`;

            const img = document.createElement('img');
            img.src = `${serie.poster}`;
            poster.classList.add('caratula-serie')


            poster.appendChild(img);

            contenedorSeries.appendChild(poster);
        })
    }
    )
    .catch(err => console.log(err));