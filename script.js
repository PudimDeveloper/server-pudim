let tema = localStorage.getItem("tema")
let imgicon = document.getElementById("temaimg")
let body = document.getElementsByTagName("body")[0]
let container = document.getElementById("container")
let botao = document.getElementsByClassName("botao")

mudar_tema()

if (tema == null) {
  tema = localStorage.setItem("tema", "claro")
}
function mudar_tema() {
  tema = localStorage.getItem("tema")
  papel = document.getElementById("container")
  if (tema == "claro") {
    papel.style.background = "white"
    papel.style.color = "black"
    imgicon.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/1ffcbe89-a654-49bd-9b75-7da7a2742ffe.png"
    imgicon.alt = "Para você que ama branco"
    container.style.border = "0px solid white"
  }
  if (tema == "escuro") {
    papel.style.background = "black"
    papel.style.color = "white"
    imgicon.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/dbe6ba40-4192-4431-82ff-3481085f9675.png"
    imgicon.alt = "Para você que ama preto"
    body.style.backgroundColor = "black"
    container.style.border = "3px solid white"
  }
  
}

function detectar_tema() {
  if (tema == "claro") {
    localStorage.setItem("tema", "escuro")
  }
  if (tema == "escuro") {
    localStorage.setItem("tema", "claro")
  }
  mudar_tema()
}

/*
Pudim © Todos os direitos reservados.
*2026 — Site minecraft.
-| Aternos |-
*/