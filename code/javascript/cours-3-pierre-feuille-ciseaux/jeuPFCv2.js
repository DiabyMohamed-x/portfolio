function jouer(choix){

	//Rajouter les variables:
	//1. tableau de choix
	let tabChoix = ["Pierre", "Feuille", "Ciseaux"];
	//2. Generer un indexx choix " 0, 1 ou 2"
	let indexChoix = Math.floor(Math.random()*3); 
	//3. suaver la variable aleatoire de choix
	let choixIA = tabChoix[indexChoix];
	//4. afficher la variable de la machine (aleatoire)
	//4. afficher la variable de la machine (aleatoire)
	document.getElementById("choixIA").innerHTML= "Choix IA:" + choixIA;
	
	if (choix === "Pierre"){
		document.getElementById("monChoix").innerHTML= "Mon choix: Pierre";
	}
	else if (choix === "Feuille"){
			document.getElementById("monChoix").innerHTML= "Mon choix: Feuille";
	}
	else {
			document.getElementById("monChoix").innerHTML = "Mon choix: Ciseaux";	
	}
}
//recuperer les boutons, en mettant des oreilles dessus
document.getElementById("choixPierre").addEventListener("click", function() {jouer("Pierre")});
document.getElementById("choixFeuille").addEventListener("click", function() {jouer("Feuille")});
document.getElementById("choixCiseaux").addEventListener("click", function() {jouer("Ciseaux")});


