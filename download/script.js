mudar_tema()

let container = document.getElementById("container")
let imgicon = document.getElementById("temaimg")

if (tema == null) {
  tema = localStorage.setItem("tema", "claro")
}
function mudar_tema() {
  let container = document.getElementById("container")
  let imgicon = document.getElementById("temaimg")
  let paragrafo = document.getElementsByTagName("p")

  tema = localStorage.getItem("tema")
  if (tema == "claro") {
    // Quando o tema ficar claro...
    container.style.backgroundColor = "white"
    imgicon.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/1ffcbe89-a654-49bd-9b75-7da7a2742ffe.png"
    imgicon.alt = "Para você que ama branco"
    container.style.color = "black"
    container.style.border = "2px solid black"
  }
  if (tema == "escuro") {
    // Quando o tema ficar preto...
    container.style.backgroundColor = "black"
    imgicon.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/dbe6ba40-4192-4431-82ff-3481085f9675.png"
    imgicon.alt = "Para você que ama branco"
    container.style.color = "white"
    container.style.border = "2px solid white"
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

/*Pudim © Todos os direitos reservados.
2026*/