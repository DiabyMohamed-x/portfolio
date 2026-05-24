
function afficher(){
  let nombreTaper = parseInt(document.getElementById("proposition").value,10);
  if (isNaN(nombreTaper)) {
    document.getElementById("message").innerHTML = "Veuillez entrer nombre.";
    return;
  }
  document.getElementById("message").innerHTML = "Vous avez tapez : " + nombreTaper;
}

document.getElementById("jouer").addEventListener("click", afficher);

