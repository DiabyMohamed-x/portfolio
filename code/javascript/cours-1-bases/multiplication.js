function afficherTable() {
  let nombre = parseInt(document.getElementById("nombre").value, 10);

  if (isNaN(nombre)) {
    document.getElementById("resultat").innerHTML = "Veuillez entrer un nombre valide.";
    return;
  }

  let lignes = "";

  for (let i = 1; i <= 10; i++) {
    lignes += nombre + " x " + i + " = " + (nombre * i) + "<br>";
  }

  document.getElementById("resultat").innerHTML = lignes;
}

document.getElementById("multiplierButton").addEventListener("click", afficherTable);
