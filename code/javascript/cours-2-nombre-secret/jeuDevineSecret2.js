let compteur = 0;
let nombreMagique = 42;

function afficher(){
  let nombreTaper = parseInt(document.getElementById("proposition").value,10);
  if (isNaN(nombreTaper)) {
    document.getElementById("message").innerHTML = "Veuillez entrer nombre.";
    return;
  }
  compteur++;
  if (nombreTaper > nombreMagique){
    document.getElementById("message").innerHTML = "Trops grands ";

  }
  else if (nombreTaper < nombreMagique){
    document.getElementById("message").innerHTML = "Trops petit ";
  }
  else {
  document.getElementById("message").innerHTML = "Gagner";
  }
  document.getElementById("nbTentatives").innerHTML = "Nombre Tentatives: " + compteur;
}

document.getElementById("jouer").addEventListener("click", afficher);

