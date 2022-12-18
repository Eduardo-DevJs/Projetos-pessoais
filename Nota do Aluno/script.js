let resposta = document.getElementById("resposta")

function calcular() {
  let nome = document.getElementById('name').value
  let nota1 = Number(document.getElementById('nota1').value)
  let nota2 = Number(document.getElementById('nota2').value)
  let nota3 = Number(document.getElementById('nota3').value)

  let media = Number((nota1 + nota2 + nota3) / 3).toFixed(1)

  if(media >= 6){
    resposta.innerHTML = `Olá ${nome}, sua média é: ${media}, APROVADO(A)!`
  }else{
    resposta.innerHTML = `Olá ${nome}, sua média é: ${media}, REPROVADO(A)!`
  }
}