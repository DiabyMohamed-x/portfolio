//Definir la fonction ajouterTache()
function ajouterTache() {
//1.1. Recuperer les valeurs des inputs
	let leTravailleur = document.getElementById('travailleur').value;
	let laDescriptionTache = document.getElementById('descriptionTache').value;
	let laDateTache = document.getElementById('dateTache').value;
//1.2. Imprimer la liste des taches	
	document.getElementById("listeTaches").innerHTML = 
	"<br>Description Tache : "+ laDescriptionTache + "<br> La Date limite de la tache: " 
	+ laDateTache + "<br> Nom du travailleur: " + leTravailleur;
}
// Mettre une "oreille" sur le bouton boutonAjouterTache  appeler la fonction ajouterTache();
document.getElementById("bontonAjouterTache")
.addEventListener("click", function() {ajouterTache();});






let printDpt =``;
	printDpt = `<p>`; 
	for(let s=0; s < departements.length; s++){
		printDpt += `Nom: ${departements[s].nom} 
					   Taches Realisees: ${departements[s].scoreValider}  
					   Taches En Cours: ${departements[s].scoreEnCours}`;
		printDpt += `<br>`;
	}
	printDpt = printDpt + `</p>`;


