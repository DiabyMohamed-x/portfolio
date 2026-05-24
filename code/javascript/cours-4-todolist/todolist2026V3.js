//2.1 Ajouter un tableau de taches
 let tabTaches =  [
 	{travailleur: "Mike", descriptionTache: "ecrire un livre", date: "13-12-2026", status: "en cours"},
	{travailleur: "Cruyft", descriptionTache: "jouer au beau foot", date: "13-01-2026", status: "en cours"},
	{travailleur: "Kellian", descriptionTache: "studying AI-Entrepreneurship", date: "13-02-2026", status: "en cours"}
			];

function afficherTaches(){
	let listeAfficherTaches = '';
	//parcour tout le tableau de taches
	for(let i=0; i<tabTaches.length; i++){
		listeAfficherTaches = listeAfficherTaches 
								+ "<br>Nom Travailleur: " + tabTaches[i].travailleur
								+ "<br>Description Tache: " + tabTaches[i].descriptionTache 
								+ "<br>Date Limite: " + tabTaches[i].date
								+ "<br>Status: " + tabTaches[i].status;
	}
	//listeAfficherTaches = listeAfficherTaches + "</p>";
	document.getElementById("listeTaches").innerHTML = listeAfficherTaches;
}



//2.4 Ajouter une fonction afficher qui afficher toutes les taches dans le tableau construi.
//Definir la fonction ajouterTache()
function ajouterTache() {
//1.1. Recuperer les valeurs des inputs
	let leTravailleur = document.getElementById('travailleur').value;
	let laDescriptionTache = document.getElementById('descriptionTache').value;
	let laDateTache = document.getElementById('dateTache').value;
	let leStatus = "en cours";
//2.2 Ajouter la nouvelle tache dans le tableau tabTaches
	tabTaches.push(
		{travailleur: leTravailleur, 
			descriptionTache: laDescriptionTache,
			date: laDateTache, 
			status: leStatus}
		);


//2.3. Appeler une fonction pour afficher le tableau des taches
	afficherTaches();	
}
// Mettre une "oreille" sur le bouton boutonAjouterTache  appeler la fonction ajouterTache();
document.getElementById("bontonAjouterTache").addEventListener("click", function() {ajouterTache();});






