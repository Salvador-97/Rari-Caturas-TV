const botonNav = document.querySelector('.btn-nav');

botonNav.addEventListener('click', e => {
    e.preventDefault();

    const btnTemporadas = document.querySelector('.btn-temporadas');
    const navLinks = document.querySelector('.nav-principal');
    const links = document.querySelectorAll('.nav-links');


    //Tengo que habilitar todos los links
    // Revisar cuando haga el cambio a fetch

    if (navLinks.classList.contains('habilitado')) {
        navLinks.classList.remove('habilitado');
        links.forEach(link => {
            link.classList.add('link-deshabilitado');
            link.classList.remove('link-habilitado')
        });
    } else {
        navLinks.classList.add('habilitado');
        links.forEach(link => {
            link.classList.add('link-habilitado');
            link.classList.remove('link-deshabilitado')
        });
    }

})