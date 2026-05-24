
//FONCTION qui va etre appele si il y a evenement "click" sur le button verifierButton.
function verifierAge() {
  let age = parseInt(document.getElementById("age").value, 10);

  if (isNaN(age)) {
    document.getElementById("message").innerHTML = "Veuillez entrer un age valide.";
    return;
  }

  if (age >= 18) {
    document.getElementById("message").innerHTML = "Majeur";
  } else {
    document.getElementById("message").innerHTML = "Mineur";
  }
}
//FIN FONCTION

document.getElementById("verifierButton")
.addEventListener("click", verifierAge);
