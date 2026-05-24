function afficherFiche() {
  let prenom = document.getElementById("prenom").value;
  let age = parseInt(document.getElementById("age").value, 10);
  let ville = document.getElementById("ville").value;

  if (prenom === "" || ville === "" || isNaN(age)) {
    document.getElementById("fiche").innerHTML = "Veuillez remplir tous les champs.";
    return;
  }

  let utilisateur = {
    prenom: prenom,
    age: age,
    ville: ville
  };

  let statut = "mineur";
  if (utilisateur.age >= 18) {
    statut = "majeur";
  }

  document.getElementById("fiche").innerHTML =
    utilisateur.prenom + " a " + utilisateur.age + " ans, habite a " + utilisateur.ville + " et est " + statut + ".";
}

document.getElementById("ficheButton").addEventListener("click", afficherFiche);
