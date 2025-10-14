const botonTemporadas = document.querySelector('.btn-temporadas');

botonTemporadas.addEventListener('click', e => {
    e.preventDefault();

    const btnTemporadas = document.querySelector('.btn-temporadas');
    const navLinks = document.querySelector('.nav-temporadas');
    const links = document.querySelectorAll('.link-temporada');


    //Tengo que habilitar todos los links
    // Revisar cuando haga el cambio a fetch

    if (navLinks.classList.contains('habilitado')) {
        navLinks.classList.remove('habilitado');
        btnTemporadas.classList.remove('border-boton')
        links.forEach(link => {
            link.classList.add('link-deshabilitado');
            link.classList.remove('link-habilitado')
        });
    } else {
        navLinks.classList.add('habilitado');
        btnTemporadas.classList.add('border-boton');
        links.forEach(link => {
            link.classList.add('link-habilitado');
            link.classList.remove('link-deshabilitado')
        });
    }

})