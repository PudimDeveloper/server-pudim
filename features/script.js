let body = document.getElementsByTagName("body")[0]
let tema1 = "#bbbbbb";
let tema2 = "black";
let cor1 = "white";
let cor2 = "black";
let tema = localStorage.getItem("tema")
let container = document.getElementById("container")
let video = document.getElementById("video")

mudar_tema()

if (tema == null) {
  const tema = localStorage.setItem("tema", "claro")
}

function debug(){
  alert(img.alt)
}

function mudar_tema() {
  const tema = localStorage.getItem("tema")
  papel = document.getElementById("container")
  img = document.getElementById("temas")
  if (tema == "claro") {
    // Quando o tema ficar branco...
    body.style.backgroundColor = tema1
    body.style.color = cor2
    img.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/1ffcbe89-a654-49bd-9b75-7da7a2742ffe.png"
    img.alt = 'Para você que ama branco'
    container.style.border = "2px solid black"
    container.style.backgroundColor = "white"
    video.style.border = "2px solid black"
    
    
    
  } else if (tema == "escuro") {
    // Quando o tema ficar preto...
    body.style.backgroundColor = tema2
    body.style.color = cor1
    img.src = "https://i.supaimg.com/a4027c4b-6446-48c5-804a-4a949fc4cc61/dbe6ba40-4192-4431-82ff-3481085f9675.png"
    img.alt = "Para você que preto"
    container.style.border = "2px solid white"
    container.style.backgroundColor = "black"
    video.style.border = "2px solid white"
    
    
    
  };
}

function detectar_tema() {
  const tema = localStorage.getItem("tema")
  if (tema == "claro") {
    localStorage.setItem("tema", "escuro")
    console.log(tema)
  } else if (tema == "escuro") {
    localStorage.setItem("tema", "claro")
    console.log(tema)
  };
  mudar_tema()
}
/*Pudim © Todos os direitos reservados.
2026*/