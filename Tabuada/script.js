function gerarTabuada(){
  let numero = document.getElementById("numero").value
  let resposta = document.getElementById("resposta")

  if(numero === ''){
    alert('Favor Prencher o campo')
  }else{
    resposta.innerHTML = ''
    for(let i = 0; i <= 10; i++){
      let tab = `${i} * ${numero} = ${numero * i}`
      
      let item = document.createElement('option')
      item.innerHTML = tab

      resposta.appendChild(item)

    }
  }
}