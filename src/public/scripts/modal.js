const open = document.getElementById('openModal');
const modal = document.getElementById('mainModal');
const close = document.getElementById('closeModal');

open.addEventListener('click', () => {
    modal.showModal();
});

close.addEventListener('click', () => {
    modal.close();
});