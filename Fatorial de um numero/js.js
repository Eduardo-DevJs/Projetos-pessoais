let numeroFator = document.querySelector('.numero')
let fator = document.querySelector(".fator")
let resposta = document.querySelector(".repostaFator")
console.log(numeroFator)


function fatorDeUmNumero(){
  let fator = 1
  for(let i = 1; i <= numeroFator.value; i++){
    fator *= i
  }
  resposta.innerHTML = `O fatorial do ${numeroFator.value} é ${fator}`
}

function fatorial(){
  if(numeroFator.value === ''){
    alert("Favor, insira algum número")
  }else{
    fatorDeUmNumero()
  }

  numeroFator.focus()
  numeroFator.value = ''
}

// eventos
fator.addEventListener("click", fatorial )