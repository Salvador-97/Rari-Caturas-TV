
const open = document.getElementById('openModal');
const modal = document.getElementById('mainModal');
const close = document.getElementById('closeModal');

const descargar = document.getElementById('modal-descargar');
const modalDescargar = document.getElementById('mainModalDescarga');
const closeDescarga = document.getElementById('closeModalD');

open.addEventListener('click', () => {
    modal.showModal();
});

close.addEventListener('click', () => {
    modal.close();
});

descargar.addEventListener('click', () => {
    modalDescargar.showModal();
});

closeDescarga.addEventListener('click', () => {
    modalDescargar.close();
});




