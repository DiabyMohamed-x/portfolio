//Definir la fonction ajouterTache()
function ajouterTache() {
//1.1. Recuperer les valeurs des inputs
	let laDescriptionTache = document.getElementById('descriptionTache').value;
	let laDateTache = document.getElementById('dateTache').value;
	document.getElementById("listeTaches").innerHTML = 
	"Description Tache : "+ laDescriptionTache+"<br> La Date limite de la tache: " 
	+ laDateTache;
}
// Mettre une "oreille" sur le bouton boutonAjouterTache  appeler la fonction ajouterTache();
document.getElementById("bontonAjouterTache")
.addEventListener("click", function() {ajouterTache();});


