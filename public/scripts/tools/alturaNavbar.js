const navbar = document.querySelector("header");
const img404 = document.querySelector(".mensaje-404");
const altura = navbar.offsetHeight;

console.log("NavBar", altura)
img404.style.height = `calc(100vh - ${altura}px)`;