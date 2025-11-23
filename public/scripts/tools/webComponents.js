class head extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
            <link rel="stylesheet" href="/styles/base/reset.css">
            <link rel="stylesheet" href="/styles/base/variables.css">
            <link rel="stylesheet" href="/styles/layouts/header.css">
            <link rel="stylesheet" href="/styles/layouts/home.css">
            <link rel="stylesheet" href="/styles/layouts/serie.css">
            <link rel="stylesheet" href="/styles/layouts/episodio.css">
            <link rel="stylesheet" href="/styles/layouts/footer.css">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link
                href="https://fonts.googleapis.com/css2?family=Bangers&family=Creepster&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                rel="stylesheet">
            <link rel="shortcut icon" href="/images/clapperboard-solid.png" type="image/x-icon">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet"
                integrity="sha384-LN+7fdVzj6u52u30Kp6M/trliBMCMKTyK833zpbD+pXdCLuTusPj697FH4R/5mcr" crossorigin="anonymous">
        </head>
        `
    }
}

class header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <header>
            <div class="titulo-logo-main">
                <a href="/" class="nombre-pagina">RARI-CATURAS TV</a>
                <button class="btn-nav" title="navbar" type="button" id="btn-nav"><i
                        class="fa-solid fa-bars icono-nav"></i></button>
                <div class="nav-principal" id="ctn-navbar">
                    <a href="/" class="activo nav-links">Inicio</a>
                    <a href="/proximamente" class="nav-links">Proximamente</a>
                    <a href="#" class="nav-links">Adult Swim</a>
                    <a href="#" class="nav-links">FAQ</a>
                </div>
            </div>
        </header>
        `
    }
}

class footer extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = `
        <footer class="ctn-footer">
            <div class="ctn-informacion-footer">
                <section class="redes-sociales">
                    <!-- Facebook -->
                    <a href="https://www.facebook.com/people/Rari-Caturas/100064650643710/" target="_blank"
                        class="icono-footer">
                        <i class="fa-brands fa-facebook" style="color: #00a8e8;"></i>
                    </a>
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/rari_caturas/" target="_blank" class="icono-footer">
                        <i class="fa-brands fa-instagram" style="color: #ff70a6;"></i>
                    </a>
                    <!-- TikTok -->
                    <a href="https://www.tiktok.com/@rari_caturas" target="_blank" class="icono-footer">
                        <i class="fa-brands fa-tiktok" style="color: #8093f1;"></i>
                    </a>
                    <!-- YouTube -->
                    <a href="https://www.youtube.com/@Rari-Caturas-Series" target="_blank" class="icono-footer">
                        <i class="fa-brands fa-youtube" style="color: #ef233c;""></i>
            </a>
            <!-- Correo -->
            <a href=" #!" class="icono-footer" target="_blank">
                            <i class="fa-solid fa-envelope" style="color: #72ddf7;"></i>
                    </a>
                    <!-- PayPal -->
                    <a href="https://paypal.me/RariCaturas?country.x=MX&locale.x=es_XC" target="_blank" class="icono-footer">
                        <i class="fa-brands fa-paypal" style="color: #FFD43B;"></i>
                    </a>
                </section>
                <!-- Copyright -->
                <div class="copyright">
                    © 2025 Copyright: <a class="copyright" href="https://mdbootstrap.com/">Rari-Caturas TV</a>
                </div>
        </footer>
        `
    }
}


window.customElements.define('head-pagina', head);
window.customElements.define('header-page', header);
window.customElements.define('footer-page', footer);