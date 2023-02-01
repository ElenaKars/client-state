'use strict'

const url = 'https://students.netoservices.ru/nestjs-backend/auth'
const sendBtn = document.getElementById('signin__btn')
const welcome = document.getElementById('welcome')
const userId = document.getElementById('user_id')
const signin = document.getElementById('signin')
const form = document.getElementById('signin__form')

const xhr = new XMLHttpRequest()

function welcomeUser() {
  signin.classList.remove('signin_active')
  welcome.classList.add('welcome_active')
  userId.textContent = localStorage.getItem(`user_id`)
}

if (localStorage.user_id) {
  welcomeUser()
} else {
  signin.classList.add('signin_active')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(form)
    xhr.open('POST', url)
    xhr.send(formData)
    xhr.responseType = 'json'
    xhr.addEventListener('load', () => {
      if (xhr.response.success) {
        localStorage.setItem(`user_id`, xhr.response.user_id)
        localStorage.setItem(`sign`, 'signed in')
        welcomeUser()
      } else {
        console.log('Неверный логин/пароль')
        form.reset()
      }
    })
  })
}
