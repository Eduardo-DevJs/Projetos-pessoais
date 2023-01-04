let dark = document.getElementById("dark")
let clear = document.getElementById("clear")
let main = document.getElementById("main")
let logo = document.getElementById("logo")
let textos = document.getElementById("textos")

let i = document.getElementsByTagName('i')

dark.addEventListener("click",()=>{
  main.classList.add('dark')
  textos.classList.add('color')
  logo.classList.add("color")
  i[0].classList.add('color')
  i[1].classList.add('color')
})

clear.addEventListener("click",()=>{
  main.classList.remove('dark')
  textos.classList.remove('color')
  logo.classList.remove("color")
  i[0].classList.remove('color')
  i[1].classList.remove('color')
})