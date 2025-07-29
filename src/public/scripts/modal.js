
document.addEventListener("DOMContentLoaded", () => {
  const open = document.getElementById('openModal');
  const modal = document.getElementById('mainModal');
  const close = document.getElementById('closeModal');

  open.addEventListener('click', () => {
      modal.showModal();
  });

  close.addEventListener('click', () => {
      modal.close();
  });
});

const descargar = document.getElementById('modal-descargar');
const modalDescargar = document.getElementById('mainModalDescarga');
const closeDescarga = document.getElementById('closeModalD');

descargar.addEventListener('click', () => {
    modalDescargar.showModal();
});

closeDescarga.addEventListener('click', () => {
    modalDescargar.close();
});




