class serie {
    constructor(nombre, temporadas, banner, descripcion, logo) {
        this.nombre = nombre;
        this.temporadas = temporadas;
        this.banner = banner;
        this.descripcion = descripcion;
        this.logo = logo;
    }

    listaEpisodios = [];

    getLogo() {
        let rutaLogo = `<img src="../images/Logos/${this.logo}" alt="">`;
        return rutaLogo;
    }

    getDescripcion() {
        return `<p>${this.descripcion} </p>`;
    }

    getEpisodios() {
        return parseInt(this.temporadas);
    }

    addEpisodios(nombreEpisodio) {
        this.listaEpisodios.push(nombreEpisodio);
    }
}

const AquaTeenHungerForce = new serie("Aqua Teen Hunger Force", "4", "Banner",
    "Aclamada serie de animación emitida en el bloque Adult Swim de Cartoon Network. La serie trata de un batido, una albóndiga y una ración de patatas que son superhéroes, pero en realidad lo único que hacen es meterse en líos.",
    "Aqua-Teen-Logo.png");

listaSeries = [];
listaSeries.push(AquaTeenHungerForce);

let contenedorEP = document.querySelector(".contenedorEpisodios");
let descripcionSerie = document.createElement("DIV");
let logoSerie = document.createElement("DIV");
let temporadasSerie = document.createElement("SELECT");

descripcionSerie.innerHTML = AquaTeenHungerForce.getDescripcion();
logoSerie.innerHTML = AquaTeenHungerForce.getLogo();

contenedorEP.appendChild(logoSerie);
contenedorEP.appendChild(descripcionSerie);
