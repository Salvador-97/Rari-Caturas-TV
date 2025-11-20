//Ver lo de el uso de axios

axios.get('/api')
    .then(res => {
        const series = res.data;
        console.log("Series: ", series);

        const contenedorSeries = document.getElementById('contenedor-posters');

        series.forEach(serie => {
            const poster = document.createElement('a');
            poster.href = `watch/${serie._id}`;

            const img = document.createElement('img');
            img.src = `${serie.poster}`;

            poster.appendChild(img);

            contenedorSeries.appendChild(poster);
        })
    }
    )
    .catch(err => console.log(err));