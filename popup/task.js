'use strict'

let modalWindow = Array.from(document.getElementsByClassName('modal'))
let modalClose = Array.from(document.getElementsByClassName('modal__close'))

if (!document.cookie.includes('modalWindow=closed')) {
  modalWindow[0].classList.add('modal_active')
  modalClose[0].addEventListener('click', () => {
    modalWindow[0].classList.remove('modal_active')
    document.cookie = 'modalWindow=closed'
  })
}
