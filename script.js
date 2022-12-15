// let viensouvrir = null;

let lapopup = document.querySelector("#popup");
let container = document.querySelector(".container");
document.body.addEventListener("click", function (e) {
  //   console.log(e.target.className);

  if (e.target.className == "popupItem") {
  } else if (e.target.className != "carreRouge") {
    lapopup.classList.remove("ouvrir");
    lapopup.classList.add("ferme");
    lapopup.classList.add("fermer");
    container.classList.remove("opacity");
  }
});

function popup(jour) {
  let textjour = document.querySelector("#jour");
  let popup = document.querySelector(".popup");
  let container = document.querySelector(".container");
  textjour.innerHTML = jour;

  popup.classList.remove("fermer");
  popup.classList.remove("ferme");
  popup.classList.add("ouvrir");
  container.classList.add("opacity");

  //   viensouvrir = true;
}

function fermerpopup() {
  let popup = document.querySelector(".popup");
  popup.classList.remove("ouvrir");
  popup.classList.add("ferme");
  popup.classList.add("fermer");
}
