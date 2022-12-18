let input = document.querySelectorAll('input')
let nome = document.getElementById("nome")
let email = document.getElementById("email")
let telephone = document.getElementById("telephone")
let message = document.getElementById("message")
let small = document.querySelectorAll('small')

function validacaoForm() {
  if (nome.value === '' || email.value === '' || telephone.value === '' || message.value === '') {
    for (let i = 0; i < small.length; i++) {
      small[i].style.display = 'block'
      input[i].classList.add('border-red')
      message.classList.add('border-red')
    }
  } else {
    for (let i = 0; i < small.length; i++) {
      small[i].style.display = 'none'
      input[i].classList.remove('border-red')
      input[i].classList.add('border-green')
      message.classList.remove('border-red')
      message.classList.add('border-green')
    }
    for (let i = 0; i < input.length; i++) {
      input[i].classList.add('border-green')
    }
    message.classList.add('border-green')
  }
}