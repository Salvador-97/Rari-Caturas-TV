
async function cargarPartes(parte, url) {
    const res = await axios.get(url);
    document.getElementById(parte).innerHTML = res.data;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarPartes("header", "/pages/header.html");
});