let nombreMystere = Math.floor(Math.random() * 100) + 1;
let compteur = 0;
let essais = [];

function testerNombre() {
  let valeur = parseInt(document.getElementById("proposition").value);

  if (isNaN(valeur)) {
    document.getElementById("message").innerHTML = "Entre un nombre valide.";
    return;
  }

  compteur++;
  essais.push(valeur);

  document.getElementById("tentatives").innerHTML = "Tentatives : " + compteur;
  document.getElementById("historique").innerHTML = "Essais : " + essais.join(" ## ");

  if (valeur < nombreMystere) {
    document.getElementById("message").innerHTML = "Trop petit !";
  } else if (valeur > nombreMystere) {
    document.getElementById("message").innerHTML = "Trop grand !";
  } else {
    document.getElementById("message").innerHTML = "Bravo ! Tu as trouvé le nombre mystère.";
  }
}

function recommencerJeu() {
  nombreMystere = Math.floor(Math.random() * 100) + 1;
  compteur = 0;
  essais = [];

  document.getElementById("message").innerHTML = "Nouvelle partie !";
  document.getElementById("tentatives").innerHTML = "Tentatives : 0";
  document.getElementById("historique").innerHTML = "Essais : aucun";
  document.getElementById("proposition").value = "";
}

document.getElementById("testerBtn").addEventListener("click", testerNombre);
document.getElementById("resetBtn").addEventListener("click", recommencerJeu);