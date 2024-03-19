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
        let rutaLogo = `<img src="../images/Logos/${this.logo}" alt="" class="logo-serie">`;
        return rutaLogo;
    }

    getDescripcion() {
        return `<p class="contenedor-sinopsis">${this.descripcion} </p>`;
    }

    getTemporadas() {
        return this.temporadas;
    }

    getEpisodios() {
        return this.listaEpisodios;
    }

    addEpisodios(nombreEpisodio) {
        this.listaEpisodios.push(nombreEpisodio);
    }
}

const AquaTeenHungerForce = new serie("Aqua Teen Hunger Force", 10, "Banner",
    "Aclamada serie de animación emitida en el bloque Adult Swim de Cartoon Network. La serie trata de un batido, una albóndiga y una ración de patatas que son superhéroes, pero en realidad lo único que hacen es meterse en líos.",
    "Aqua-Teen-Logo.png");

AquaTeenHungerForce.addEpisodios("Video Ouija");
AquaTeenHungerForce.addEpisodios("Viaje Sin Complicaciones");
AquaTeenHungerForce.addEpisodios("Los Selenitas 3 Remooned");
AquaTeenHungerForce.addEpisodios("Caramba");
AquaTeenHungerForce.addEpisodios("Tonto Electronico");
AquaTeenHungerForce.addEpisodios("Poco Frágil");
AquaTeenHungerForce.addEpisodios("Roboniñera");
AquaTeenHungerForce.addEpisodios("Los Selenitas 4 Amo De La Luna");
AquaTeenHungerForce.addEpisodios("La Dieta");
AquaTeenHungerForce.addEpisodios("Dusty Gozongas");
AquaTeenHungerForce.addEpisodios("La Camiseta De Shake");
AquaTeenHungerForce.addEpisodios("Hypno-Germ");
AquaTeenHungerForce.addEpisodios("Spacegate World");


listaSeries = [];
listaSeries.push(AquaTeenHungerForce);
let listaEP = AquaTeenHungerForce.getEpisodios();

let contenedorDescripcion = document.querySelector(".descripcion-serie");
let temporadasSerie = document.querySelector(".selectorTemporadas");
let contenedorEpisodios = document.querySelector(".flex-episodios");
let descripcionSerie = document.createElement("DIV");
let logoSerie = document.createElement("DIV");

logoSerie.innerHTML = AquaTeenHungerForce.getLogo();
descripcionSerie.innerHTML = AquaTeenHungerForce.getDescripcion();

contenedorDescripcion.prepend(descripcionSerie);
contenedorDescripcion.prepend(logoSerie);
// contenedorDescripcion.appendChild(logoSerie);
// contenedorDescripcion.before(descripcionSerie);
// contenedorDescripcion.appendChild(descripcionSerie);


let fragmentoTemporadas = document.createDocumentFragment();
let fragmentoEpisodios = document.createDocumentFragment();

for (let i = 1; i <= AquaTeenHungerForce.getTemporadas(); i++) {
    let temporada = document.createElement("OPTION");
    temporada.classList.add("selectorTemporadas");
    temporada.innerHTML = `Temporada ${i}`;
    fragmentoTemporadas.appendChild(temporada);
}

temporadasSerie.appendChild(fragmentoTemporadas);

for (i = 0; i < listaEP.length; i++){
    let contenedorEpisodio = document.createElement("DIV");
    contenedorEpisodio.innerHTML = `<a href="#"><img src="../images/Caratulas/Aqua-Teen/${i + 1}.png" alt=""></a>
    <h4>Ep.${i + 1}. ${listaEP[i]}</h4>`;
    fragmentoEpisodios.appendChild(contenedorEpisodio);
}

contenedorEpisodios.appendChild(fragmentoEpisodios);


// contenedorEP.appendChild(logoSerie);
// contenedorEP.appendChild(descripcionSerie);
// temporadasSerie.appendChild(fragmentoTemporadas);

