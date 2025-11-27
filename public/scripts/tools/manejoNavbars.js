const botonTemporadas = document.querySelector('.btn-temporadas');
const navLinks = document.querySelector('.nav-temporadas');
const botonNavPrincipal = document.querySelector('.btn-nav');
const navPrincipalLinks = document.querySelector('.nav-principal');

window.addEventListener('load', fixNav);
window.addEventListener('resize', fixNav);

function fixNav() {
    const header = document.querySelector('.titulo-logo-main');
    const nav = document.querySelector('.nav-principal');
    nav.style.top = `${header.offsetHeight}px`;
}

botonNavPrincipal.addEventListener('click', e => {
    const links = document.querySelectorAll('.nav-links');

    if (navPrincipalLinks.classList.contains('habilitado')) {
        deshabilitarNav(navPrincipalLinks, 'habilitado', e, links);
    } else {
        habilitarNav(navPrincipalLinks, 'habilitado', e, links)
    }
})

botonTemporadas.addEventListener('click', e => {
    const links = document.querySelectorAll('.link-temporada');

    if (navLinks.classList.contains('habilitado')) {
        deshabilitarNav(navLinks, 'habilitado', e, links);
    } else {
        habilitarNav(navLinks, 'habilitado', e, links)
    }
})


function habilitarNav(navbar, claseLink, e, links) {
    navbar.classList.toggle(claseLink);
    links.forEach(link => {
        link.classList.toggle('link-habilitado')
    })
    e.stopPropagation();
}

function deshabilitarNav(navbar, claseLink, e, links) {
    if (navbar.classList.contains('habilitado')) {
        navbar.classList.remove(claseLink);
    }

    links.forEach(link => {
        if (link.classList.contains('link-habilitado') && !link.contains(e.target)) {
            link.classList.remove('link-habilitado');
        }
    })
}

document.addEventListener('click', e => {
    const navLinks = document.querySelector('.nav-temporadas');
    const links = document.querySelectorAll('.link-temporada')

    if (navLinks.classList.contains('habilitado')) {
        deshabilitarNav(navLinks, 'habilitado', e, links);
    }
})