const buttonOpen = document.querySelector('[data-modal-button]');
const modal = document.querySelector('[data-modal]');
const buttonClose = document.querySelector('[data-modal-close]');

buttonOpen.addEventListener('click', function(){
    modal.classList.remove('hidden');
})

buttonClose.addEventListener('click', function(){
    modal.classList.add('hidden');
})

modal.addEventListener('click', function(){
    this.classList.add('hidden');
})

modal.querySelector('.modal-window').addEventListener('click', function(e){
    e.stopPropagation();
})