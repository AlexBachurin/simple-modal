window.addEventListener('DOMContentLoaded', () => {
    //get elems
    const modalTrigger = document.querySelector('[data-modal]'),
          modalClose = document.querySelector('.modal__close'),
          modal = document.querySelector('.modal');

        //trigger modal open
        modalTrigger.addEventListener('click', () => {
            modal.classList.add('show');
        })

        //close on  X
        modalClose.addEventListener('click', () => {
            modal.classList.remove('show');
        })

        //close on outside click of modal content

        modal.addEventListener('click', (e) => {
            if (e.target && e.target === modal) {
                modal.classList.remove('show')
            }
        })
          
})