function calculeMagic(event) {
  event.preventDefault();

  let monAge = parseInt(document.getElementById("age").value, 10);
  let maTaille = parseFloat(document.getElementById("taille").value);

  if (isNaN(monAge) || isNaN(maTaille)) {
    document.getElementById("numeroMagique").innerHTML = "Veuillez entrer deux nombres valides.";
    return;
  }

  let total = monAge * maTaille;
  document.getElementById("numeroMagique").innerHTML = total;
}

document.getElementById("magicForm").addEventListener("submit", calculeMagic);
