const botonTemporadas = document.querySelector('.btn-temporadas');
const navLinks = document.querySelector('.nav-temporadas');

botonTemporadas.addEventListener('click', e => {
    const links = document.querySelectorAll('.link-temporada');
    //Revisar clases
    navLinks.classList.toggle('habilitado');
    links.forEach(link => {
        link.classList.toggle('link-habilitado')
    })
    // links.classList.toggle('link-habilitado')
    e.stopPropagation();
})

navLinks.addEventListener('click', e => {
    if (e.target.classList.contains('link-temporada')) {
        navLinks.classList.remove('habilitado');
    }
    const links = document.querySelectorAll('.link-temporada');    

    links.forEach(link => {
        if(link.classList.contains('link-habilitado') && !link.contains(e.target)) {
            link.classList.remove('link-habilitado');
        }
    })
})

document.addEventListener('click', e => {
    if (navLinks.classList.contains('habilitado') && !navLinks.contains(e.target)) {
        navLinks.classList.remove('habilitado');
    }
})