const botonNav = document.getElementById('btn-nav');

botonNav.addEventListener('click', e => {
    e.preventDefault();

    const navLinks = document.getElementById('ctn-navbar');
    const header = document.querySelector('.contenedor-header');

    alturaHeader = header.offsetHeight;
    console.log("Altura", alturaHeader)

    if (navLinks.classList.contains('ver-nav')) {
        navLinks.classList.remove('ver-nav');
        navLinks.style.transform = `translateY(${-alturaHeader}px)`;
    } else {
        navLinks.classList.add('ver-nav');
        navLinks.style.transform = `translateY(${alturaHeader}px)`;
    }
})