function additionner() {
  let nombre1 = parseFloat(document.getElementById("nombre1").value);
  let nombre2 = parseFloat(document.getElementById("nombre2").value);

  if (isNaN(nombre1) || isNaN(nombre2)) {
    document.getElementById("resultat").innerHTML = "Veuillez entrer deux nombres.";
    return;
  }

  let somme = nombre1 + nombre2;
  document.getElementById("resultat").innerHTML = "La somme est : " + somme;
}

document.getElementById("additionButton").addEventListener("click", additionner);
