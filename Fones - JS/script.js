let produto = document.getElementById("produto1")
let produtoDois = document.getElementById("produto2")
let produtoTres = document.getElementById("produto3")

let imagemAtual = document.querySelector(".imagemAtual")

produto.addEventListener('click', ()=>{
  imagemAtual.src = 'img/product1.png'
})

produtoDois.addEventListener('click', ()=>{
  imagemAtual.src = 'img/product2.png'
})

produtoTres.addEventListener('click', ()=>{
  imagemAtual.src = 'img/product3.png'
})