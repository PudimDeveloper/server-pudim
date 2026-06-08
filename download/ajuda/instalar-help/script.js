
detectar_tema()

container = document.getElementById("container")
imagem = document.getElementsByTagName("img")[0]
var tema = localStorage.getItem("tema")

if (tema == null) {
  tema = localStorage.setItem("tema", "claro")
}
function mudar_tema() {
  let tutors = document.getElementsByClassName("tutorial")
  tema = localStorage.getItem("tema")
  container = document.getElementById("container")
  imagem = document.getElementsByTagName("img")[0]
  papel = document.getElementById("container")
  if (tema == "claro") {
    // Quando o tema ficar claro...
    container.style.backgroundColor = "white"
    imagem.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/1ffcbe89-a654-49bd-9b75-7da7a2742ffe.png"
    container.style.color = "black"
    for (let tutor of tutors) {
      tutor.style.border = "2px solid #ffffff00"
    }
  }
  if (tema == "escuro") {
    // Quando o tema ficar preto...
    container.style.backgroundColor = "black"
    imagem.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/dbe6ba40-4192-4431-82ff-3481085f9675.png"
    container.style.border = "2px solid white"
    container.style.color = "white"
    for (let tutor of tutors) {
      tutor.style.border = "2px solid white"
      tutor.style.transition = "1s"
    }
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