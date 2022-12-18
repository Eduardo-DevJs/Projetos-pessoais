
let somaNumeros = document.getElementById('somar-numeros')
let addNumeros = document.getElementById('add-numeros')

let mostrar = document.getElementById('mostrar')

let resposta = document.getElementById('resposta')


let arrayNumeros = []

addNumeros.addEventListener('click', () => {
  let numeros = Number(document.getElementById('numeros').value)
  arrayNumeros.push(numeros)
  mostrar.innerHTML = arrayNumeros
})

somaNumeros.addEventListener('click', () => {
  let soma = 0
  for (let i = 0; i < arrayNumeros.length; i++) {
    soma += arrayNumeros[i]
  }
  resposta.innerHTML = `A soma de todos os numeros digitados é: ${soma}`
})
